(function () {
  'use strict';

  angular
      .module('teamgrassesApp')
      .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['UserService', 'ProductService', '$rootScope', 'Upload', 'ObjectService'];
  function MainCtrl(UserService, ProductService, $rootScope, Upload, ObjectService) {
    var controller = this;
    controller.user = null;
    controller.search_parameters= {
      option: 1
    };
    controller.search = {
      keywords: []
    };
    controller.searchData = {
      name: "coca-cola",
      description: "Coca-Cola, or Coke, is a carbonated soft drink produced by The Coca-Cola Company. Originally intended as a patent medicine, it was invented in the late 19th century by John Pemberton and was bought out by businessman Asa Griggs Candler, whose marketing tactics led Coca-Cola to its dominance of the world soft-drink market throughout the 20th century.",
      picture_1: "http://www.coca-colacompany.com/content/dam/journey/us/en/private/2015/02/chronology10-1280-900-bfb7f27c.jpg",
      picture_2: "https://www.thesun.co.uk/wp-content/uploads/2017/03/nintchdbpict000277254629.jpg?strip=all&w=676",
      picture_3: "https://vignette3.wikia.nocookie.net/logopedia/images/a/a8/Coca-Cola_1950.png/revision/latest?cb=20150801073948"
    };

    controller.searchedProducts = [];

    initController();

    function initController() {
      loadCurrentUser();
    }

    function loadCurrentUser() {
      if($rootScope.globals.currentUser != null) {
        UserService.GetByEmail($rootScope.globals.currentUser.email)
            .then(function (user) {
              controller.user = user.user[0];
            });
      }
    }

    controller.searchProduct = function() {
      controller.searchedProducts = [];

      for(var keyword in controller.search.keywords) {
        ProductService.GetByKeyword(controller.search.keywords[keyword])
          .then(function (products) {
            if(products.items != undefined) {
              for(var product in products.items) {
                controller.searchedProducts.push(products.items[product]);
              }
            }
          });
      }
      //console.log(controller.searchedProducts);

    };

    controller.triggerUpload = function() {
      var pictureuploader = angular.element("#pictureInput");
      pictureuploader.trigger('click')
    };

    controller.uploadFiles = function(file, errFiles) {
      controller.f = file;
      controller.errFile = errFiles && errFiles[0];
      controller.search.keywords = [];
      if (file) {
        Upload.upload({
          url: './vision-shopping-api/visual-recognition/upload_picture.php',
          method: 'POST',
          file: file,
          data: {
            'name' : 'vision'
          }
        })
          .then(function (response) {
            if (response != null) {
              var imageLink = response.data;
              ObjectService.GetByImageUrl(imageLink)
                .then(function (keywords) {
                  var tempKeywords = keywords.images[0].classifiers[0].classes;
                  for(var keyword in tempKeywords) {
                    if(tempKeywords[keyword].score > 0.7) {
                      controller.search.keywords.push(tempKeywords[keyword].class.split(' ').join('-'));
                    }
                  }
                  console.log(controller.search.keywords);
                  //controller.user = user.user[0];
                  controller.searchData = ObjectService.GetDataByKeywords(controller.search.keywords);
                });
            } else {
              FlashService.Error("Can't upload picture！");
            }
          });
      }
    };

  }
})();
