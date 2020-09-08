[
    {
        "_id": "5f538a08c48587eda4626fba",
        "name": "Oreo",
        "price": 8.9,
        "rating": 4.8,
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/719zds2RDVL._SX425_.jpg",
        "__v": 0
    },
    {
        "_id": "5f568e716921e621741a7d25",
        "name": "AppleNew",
        "price": 1010,
        "rating": 3,
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/719zds2RDVL._SX425_.jpg",
        "__v": 0
    }
]

# set createdAt of imageUrl = (new Date()).toDateString() in post req of creating a new entry

{
    "author": "A1",
    "title": "ABC",
    "abstract" : "A1 abstract",
    "body" : "body text here body text here body text here body text here",
    "imageUrl" : "www.randomimagelink.com/image"
}

{
    "_id": "5f56f94c4aaec087e2cb248d",
    "author": "A1",
    "title": "ABC",
    "abstract": "A1 abstract",
    "body": "body text here body text here body text here body text here",
    "imageUrl": "www.randomimagelink.com/image",
    "comments": [],
    "__v": 0
}

//comment below

{
    "commenter": "Comm1",
    "title": "commentTitle",
    "comment" : "A good and nice comment !!"

}



/////////////////////
{
    "_id": "5f56f94c4aaec087e2cb248d",
    "author": "A1",
    "title": "ABC",
    "abstract": "A1 abstract",
    "body": "body text here body text here body text here body text here",
    "imageUrl": "www.randomimagelink.com/image",
    "comments": [
        {
            "_id": "5f56fde19a9b1b8e1601997b",
            "commenter": "Comm1",
            "title": "commentTitle",
            "comment": "A good and nice comment !!"
        },
        {
            "_id": "5f56ff16083f2ce55605576a",
            "commenter": "Comm1",
            "title": "commentTitle",
            "comment": "A good and nice comment !!"
        }
    ],
    "__v": 0
}
//////////////////////////////////////////