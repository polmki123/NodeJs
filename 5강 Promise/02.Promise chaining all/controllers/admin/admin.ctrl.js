const models = require('../../models');
const products = require('../../models/products');

exports.get_products = ( _ , res) => {
    // res.render( 'admin/products.html' , 
    //     { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    // );
    models.Products.findAll( //모델의 Products 테이블에서 데이터를 찾는다. 
        {

        }
    // ).then( ( productList) => {
    //     res.render('admin/products.html', { Products : productList })
    // }); 이렇게 써두 되고 아래처럼 써도 된다.
    ).then( ( Products) => {
        res.render('admin/products.html', { Products })
    });
}

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_products_write = ( req , res ) => {
    // res.send(req.body);
    models.Products.create(
        {
            name : req.body.name,
            price : req.body.price,
            description : req.body.description
        }
    ).then( () => 
        res.redirect('/admin/producrts')
    );

    models.Products.create(req, body).then( () =>
    {
        models.Producst.create(req.body).then( 
            () => {
                res.redirect( '/admin/products');
            }
        )
    })
}

exports.get_products_detail = ( req, res ) => {
    // 이것을 callback hell 이라 한다. 
    // const product1 = models.Products.findByPk(req.params.id).then( ( product ) => {
    //     const product2 = models.Products.findByPk(req.params.id).then( ( product ) => {
    //         const product3 = models.Products.findByPk(req.params.id).then( ( product ) => {
    //             res.render( 'admin/detail.html', { product1: product1, product2 : product2 });
    //         });
    //     });
    // });

    const product3 = models.Products.findByPk(req.params.id).then( ( product ) => {
            
    });
    const product3 = models.Products.findByPk(req.params.id).then( ( product ) => {
            
    });

    res.render( 'admin/detail.html', { product1: product1, product2 : product2 });
}