const moment = require('moment');

module.exports = function(sequelize, DataTypes){
    const Products = sequelize.define('Products',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            name : { type: DataTypes.STRING },
            price : { type: DataTypes.INTEGER },
            description : { type: DataTypes.TEXT }
        }
        )

    //  prototype은 함수를 만드는 것이다. 
    // Products.prototype.dateFormat = (date) => (
    //     moment(date).format('YYYY-MM-DD')
    // ); 
    // 위 처럼 사용해도 되고 아래처럼 사용해도 됨 
    Products.prototype.dateFormat = (date) => {
       return moment(date).format('YYYY년 MM월 DD일')
    }

    return  Products ;
} 
// 이렇게 새롭게 생성 