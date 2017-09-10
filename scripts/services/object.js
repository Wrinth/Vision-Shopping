(function () {
  'use strict';

  angular
    .module('teamgrassesApp')
    .factory('ObjectService', ObjectService);

  ObjectService.$inject = ['$http'];
  function ObjectService($http) {
    var service = {};

    var labels = [
      {
        name: "apple",
        description: "The apple tree (Malus pumila, commonly and erroneously called Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple.",
        picture_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1200px-Red_Apple.jpg",
        picture_2: "http://www.womenshealthmag.com/sites/womenshealthmag.com/files/2015/08/04/shutterstock_127612211_0_0.jpg",
        picture_3: "http://sc02.alicdn.com/kf/UT8k2yyX8JaXXagOFbXy/Fresh-Fruit-Importers-Red-Fuji-Fresh-Apple.jpg"
      },
      {
        name: "coca-cola",
        description: "Coca-Cola, or Coke, is a carbonated soft drink produced by The Coca-Cola Company. Originally intended as a patent medicine, it was invented in the late 19th century by John Pemberton and was bought out by businessman Asa Griggs Candler, whose marketing tactics led Coca-Cola to its dominance of the world soft-drink market throughout the 20th century.",
        picture_1: "http://www.coca-colacompany.com/content/dam/journey/us/en/private/2015/02/chronology10-1280-900-bfb7f27c.jpg",
        picture_2: "https://www.thesun.co.uk/wp-content/uploads/2017/03/nintchdbpict000277254629.jpg?strip=all&w=676",
        picture_3: "https://vignette3.wikia.nocookie.net/logopedia/images/a/a8/Coca-Cola_1950.png/revision/latest?cb=20150801073948"
      },
      {
        name: "food",
        description: "Food is any substance consumed to provide nutritional support for an organism. It is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.",
        picture_1: "https://az616578.vo.msecnd.net/files/responsive/embedded/any/desktop/2016/10/17/636122689955354077-1406998510_indian.jpg",
        picture_2: "http://az616578.vo.msecnd.net/files/2016/12/12/636171217554268315-714313718_foodd.jpg",
        picture_3: "http://www.truefoodkitchen.com/images/truefoodkitchen-main-dish.png"
      },
      {
        name: "beverage",
        description: "A drink or beverage is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture.",
        picture_1: "http://www.pepsicobeveragefacts.com/content/image/home-slider-choices-product-set.png",
        picture_2: "https://cdn-starbucks.netdna-ssl.com/uploads/images/_framed/sEextw8e-5412-7216.JPG",
        picture_3: "https://www.google.com/search?rlz=1C5CHFA_enUS733US734&tbm=isch&q=beverage&chips=q:beverage,g_2:creative&sa=X&ved=0ahUKEwjqpcDH2JnWAhVJxWMKHcNWA7IQ4lYIKigA&biw=1282&bih=699&dpr=2#imgrc=d4A8ZEYQSplGbM:"
      },
      {
        name: "mammal",
        description: "Mammals are any vertebrates within the class Mammalia, a clade of endothermic amniotes distinguished from reptiles by the possession of a neocortex, hair, three middle ear bones and mammary glands.",
        picture_1: "http://easyscienceforkids.com/wp-content/uploads/2013/04/Giraffe-Couple.jpg",
        picture_2: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fichef-1.bbci.co.uk%2Fnews%2F660%2Fmedia%2Fimages%2F75470000%2Fjpg%2F_75470807_af12dbbf-f211-4c08-9efe-4494431bd77d.jpg&imgrefurl=http%3A%2F%2Fwww.bbc.com%2Fnews%2Fuk-england-28036667&docid=pBZd9iG9CR_QQM&tbnid=S_q_Rk1fsbQJVM%3A&vet=10ahUKEwiar7WB25nWAhVFNpQKHWTHCLoQMwipAigsMCw..i&w=660&h=712&bih=699&biw=1282&q=Mammal&ved=0ahUKEwiar7WB25nWAhVFNpQKHWTHCLoQMwipAigsMCw&iact=mrc&uact=8",
        picture_3: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.earthtimes.org%2Fnewsimage%2Fquarter-mammals-risk-extinction_1511.jpg&imgrefurl=http%3A%2F%2Fwww.earthtimes.org%2Fenvironment%2Fmammals%2F&docid=M0AVZU9v44CLyM&tbnid=GkGOEnIm12UwEM%3A&vet=10ahUKEwiLsb-L25nWAhWFJJQKHed_Db04ZBAzCCQoIjAi..i&w=765&h=510&bih=699&biw=1282&q=Mammal&ved=0ahUKEwiLsb-L25nWAhWFJJQKHed_Db04ZBAzCCQoIjAi&iact=mrc&uact=8"
      },
      {
        name: "animal",
        description: "Animals are eukaryotic, multicellular organisms that form the biological kingdom Animalia. With few exceptions, animals are motile, heterotrophic; they reproduce sexually, and their embryonic development includes a blastula stage.",
        picture_1: "http://cdn2-www.dogtime.com/assets/uploads/gallery/samoyed-dogs-and-puppies/samoyed-dogs-puppies-8.jpg",
        picture_2: "https://www.sciencedaily.com/images/2017/08/170803141051_1_900x600.jpg",
        picture_3: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Cheetah_chase.jpg"
      },
      {
        name: "chair",
        description: "A chair is a piece of furniture with a raised surface supported by legs, commonly used to seat a single person.",
        picture_1: "http://vignette2.wikia.nocookie.net/americangirl/images/4/45/MollyBeachChair.jpg/revision/latest?cb=20100209184010",
        picture_2: "https://www.freshdesignpedia.com/wp-content/uploads/transparent-designer-furniture-from-glass-unique-crystal-clear-acrylic-furniture/transparent-designer-furniture-of-glass-chair.png",
        picture_3: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwi06-Px3JnWAhVP0GMKHXgtBAoQjBwIBA&url=http%3A%2F%2Fwww.cryomats.org%2Fi%2F2016%2F12%2Foffice_chair_wiki_84_inspirations_decoration_for_office_chair_wiki.jpg&psig=AFQjCNHLnqV5uJpR-XndZFqHeq0_tEBmAg&ust=1505102026489110"
      },
      {
        name: "ale",
        description: "Ale is a type of beer brewed using a warm fermentation method, resulting in a sweet, full-bodied and fruity taste. Historically, the term referred to a drink brewed without hops.",
        picture_1: "http://vignette2.wikia.nocookie.net/beer/images/c/c2/Dartington-Real-A1le-Crystal-Tankard_1.jpg/revision/latest?cb=20130416194313",
        picture_2: "http://vignette2.wikia.nocookie.net/beer/images/c/c2/Dartington-Real-A1le-Crystal-Tankard_1.jpg/revision/latest?cb=20130416194313",
        picture_3: "http://beerohclock.com/wp-content/uploads/2015/02/best_ale.png"
      },
      {
        name: "brew",
        description: "A kind of beer",
        picture_1: "http://www.growsouthwest.com/wp-content/uploads/2013/09/Adventures-In-Brew-LOGO-small-300x272.png",
        picture_2: "http://www.newtimesbrewatthezoo.com/wp-content/uploads/2017/02/batz_360x500.png",
        picture_3: "https://i.ytimg.com/vi/qHZPHpabYv8/hqdefault.jpg"
      },
      {
        name: "sandwish-board",
        description: "A sandwich board is a type of advertisement composed of two boards (holding a message or graphic)",
        picture_1: "https://kwmedia.scdn8.secure.raxcdn.com/media/catalog/product/s/b/sbxxxx-sandwichboardz-b3_3.jpg",
        picture_2: "http://signagecanada.ca/wp-content/uploads/2016/05/sandwich_board.jpg",
        picture_3: "http://blog.unitedreprographics.com/wp-content/uploads/2013/03/url.jpg"
      },
      {
        name: "triangle",
        description: "A triangle is a polygon with three edges and three vertices. It is one of the basic shapes in geometry",
        picture_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pink_triangle_up.svg/1200px-Pink_triangle_up.svg.png",
        picture_2: "https://www.roadtolarissa.com/wp-content/uploads/2012/12/triangle-1024x815.png",
        picture_3: "https://d30y9cdsu7xlg0.cloudfront.net/png/358755-200.png"
      },
      {
        name: "polygon",
        description: "In elementary geometry, a polygon is a plane figure that is bounded by a finite chain of straight line segments closing in a loop to form a closed polygonal chain or circuit.",
        picture_1: "https://cdn1.vox-cdn.com/uploads/chorus_asset/file/8402075/941450_609208285758470_875871287_n.0.png",
        picture_2: "http://www.barryscientific.com/lessons/polygon/1-polygon-examples.gif",
        picture_3: "https://lh3.googleusercontent.com/jwyl-lmfq21ZERowrE99frP7qfllf8QNz3yMv9fG5xpou_2I8Sev6Nd8XvMmG_yUF2o=w300"
      },
      {
        name: "tin",
        description: "Tin is a chemical element with symbol Sn and atomic number 50. It is a post-transition metal in group 14 of the periodic table. ",
        picture_1: "https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA1My83MTEvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzEwNTI1MTQxNC5qcGc=",
        picture_2: "http://www.freedomcart.com/image/cache/catalog/data/Products/sprite%20tin-700x700.jpg",
        picture_3: "https://4.imimg.com/data4/HL/LN/MY-10087656/tin-container-250x250.jpg"
      },
      {
        name: "car",
        description: "A car (or automobile) is a wheeled motor vehicle used for transportation. Most definitions of car say they run primarily on roads, seat one to eight people, have four tires, and mainly transport people rather than goods.",
        picture_1: "https://s.aolcdn.com/commerce/autodata/images/CAC70AUC171A021001.jpg",
        picture_2: "http://buyersguide.caranddriver.com/media/assets/submodel/8136.jpg",
        picture_3: "http://www.lexus.com/cm-img/visualizer/2017/rcf/-/exterior/19-seven-forged/ultra-white/large-5.jpg"
      }
    ];

    service.GetByImageUrl = GetByImageUrl;
    service.GetDataByKeywords = GetDataByKeywords;

    return service;

    function GetByImageUrl(url) {
      //return $http.get('http://vision-shopping.mybluemix.net/visual-recognition/visual-recognition.php?keyword='+url).then(handleSuccess, handleError('Error getting object by url'));
      return $http.get('https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=e7e587e88068b4654c409477fdeff95fc410787a&url='
        +url+
        '&version=2016-05-20').then(handleSuccess, handleError('Error getting object by url'));
    }

    function GetDataByKeywords(keywords) {
      var tempData = {
        name: "NAME",
        description: "DESCRIPTION",
        picture_1: "PICTURE_1",
        picture_2: "PICTURE_2",
        picture_3: "PICTURE_3"
      };
      for(var keyword in keywords) {
        for(var label in labels) {
          if(labels[label].name == keywords[keyword]) {
            tempData.name = labels[label].name;
            tempData.description = labels[label].description;
            tempData.picture_1 = labels[label].picture_1;
            tempData.picture_2 = labels[label].picture_2;
            tempData.picture_3 = labels[label].picture_3;
            break;
          }
        }
      }
      return tempData;
    }

    function handleSuccess(res) {
      return res.data;
    }

    function handleError(error) {
      return function () {
        return { success: false, message: error };
      };
    }
  }

})();
