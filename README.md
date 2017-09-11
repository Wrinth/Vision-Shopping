What Vision Shopping does?

Vision Shopping is an e-commerce website for users to search Amazon and Walmart products by simply taking photos of objects that they are interested in. 

How we built it?

We developed the front-end of Vision Shopping using Angular.js to organize the JavaScript code.
The photos uploaded by users will be sent to AWS S3 and return the image URL as String.
We used IBM Watson Visual recognition to recognize the photos from users using the URL we obtained from the AWS S3. From the Visual recognition, we obtain a list of keywords/labels related to the photos.
Using these keywords/labels, the searching engine will search their meanings and images from our MongoDB via LoopBack on IBM Bluemix, and the searching engine will also simultaneously obtain a list of related products from Walmart and Amazon open API.
Finally, the app will display a list of products related to the photos uploaded by the user.