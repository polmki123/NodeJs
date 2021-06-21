const models = require('../../models');
const products = require('../../models/products');

exports.get_products = async ( _ , res) => {
    // res.render( 'admin/products.html' , 
    //     { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    // );
    const Products = await models.Products.findAll( //모델의 Products 테이블에서 데이터를 찾는다. 
        {

        }
    // ).then( ( productList) => {
    //     res.render('admin/products.html', { Products : productList })
    // }); 이렇게 써두 되고 아래처럼 써도 된다.
    );
        
    res.render('admin/products.html', { Products })
    
}

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_products_write = async ( req , res ) => {
    // res.send(req.body);
    await models.Products.create(
       req.body
    )

    res.redirect('/admin/producrts')

}

exports.get_products_detail = async ( req, res ) => {

    const product = await models.Products.findByPk(req.params.id)

    res.render( 'admin/detail.html', { product });

}

exports.get_products_edit = async ( req, res ) => {
     
    const product = await models.Products.findByPk(req.params.id);
    res.render( 'admin/write.html', { product} );

}

exports.post_products_edit = ( req , res ) => {
    // res.send(req.body);
    models.Products.update({
        name : req.body.name,
        price : req.body.price,
        description : req.body.description
    }, {
        where : { id : req.params.id }
    }).then( () => {
        res.redirect('/admin/products/detail/' + req.params.id );
    })

}

exports.get_products_delete = ( req , res ) => {
    models.Products.destroy( 
        {
            where : {
                id : req.params.id 
            }
        }
    ).then( () => { 
        res.redirect('/admin/products');
    })
}