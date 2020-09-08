const express = require('express');
const router = express.Router();

const mongoose = require( 'mongoose' );
const Article = mongoose.model( 'Article' );

router.get('/',(req,res, next)=> {

    if(req.url!=='/?include=comments')
    {
        console.log('without comments')
        Article.find({},{'comments':0}).exec((err, result)=> {
            if( err ) {
                err.status = 500;  return next( err );
            }
            console.log(req.url)
            res.status( 200 ).json( result  );
        })
        
    }
    else {
        console.log('articlessRouter reached / with comm')
        Article.find({}).exec((err, result)=> {
            if( err ) {
                err.status = 500;  return next( err );
            }
    
            res.status( 200 ).json( result  );
        })
    }
   
    
})

router.get('/?include=comments',(req,res, next)=> {
    console.log('articlessRouter reached / with comm')
    
    
})

router.get('/:id',(req,res)=> {
    console.log('productsRouter /:id GET')
    const id = req.params.id;

    Article.find({_id: id}).exec((err, result)=> {
        if( err ) {
            err.status = 500;  return next( err );
        }
        res.status( 200 ).json( result );
    })
    
})


router.post( '/', ( req, res, next ) => {
    const product = req.body;
    console.log('articlesRouter / POST')


    if( !product ) {
        const err = new Error( 'Article should be included in request body' );
        err.status = 403;
        return next( err );
    }

    Article
        .create( product, ( err, productWithId ) => {
            if( err ) {
                err.status = 500;
                return next( err );
            }

            res.status( 200 ).json( productWithId );
        });
});

router.post( '/:id/comments', ( req, res, next ) => {
    const comment = req.body;
    const id = req.params.id;
    console.log('articlesRouter / POST comment')
    

    if( !comment ) {
        const err = new Error( 'Article should be included in request body' );
        err.status = 403;
        return next( err );
    }

 
        Article.findByIdAndUpdate( id , {$push: {comments: comment}}, (err, doneobj) => {
            res.status( 200 ).json( doneobj );
        } );


});

router.delete( '/:id', ( req, res, next ) => {
    const id = req.params.id;
    console.log('productsRouter /:id DELETE')
    Article
        .findByIdAndRemove( id )
        .exec(( err, results ) => {
            if( err ) {
                err.status = 500;
                return next( err );
            }

            res.status( 204 ).send( '' );
        });
});

router.patch( '/:id', ( req, res, next ) => {
    const id = req.params.id;
    const product = req.body;
    console.log('articlesRouter /:id PATCH')

    if( !product ) {
        const err = new Error( 'Product should be included in request body for PATCH' );
        err.status = 403;
        return next( err );
    }

    Article
        .findByIdAndUpdate( id, { $set: product } )
        .exec(( err, oldProduct, productWithUpdates ) => {
            if( err ) {
                err.status = 501;
                return next( err );
            }

            res.status( 200 ).json( productWithUpdates );
        });
});

module.exports = router

