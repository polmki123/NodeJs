const aa = new Promise ( (resolve, reject ) => {
    resolve( "promise 123" );
}
);

aa.then( (result) => {
    console.log(result);
});

const wait1seconds = new Promise ( (resolve, reject ) => {
    
    reject("에러");
    
}
);

wait1seconds.then( (result) => {
    console.log("프라미스 이행완료");
}).catch( (err) => {
    console.log(err);
});
