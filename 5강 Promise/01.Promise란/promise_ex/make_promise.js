const aa = new Promise ( (resolve, reject ) => {
    resolve( "promise 123" );
}
);

aa.then( (result) => {
    console.log(result);
});

const wait1seconds = new Promise ( (resolve, reject ) => {
    console.log("시작");
    setTimeout( () => {
        resolve( console.log( '1초뒤에 찍습니다.') )
    }, 1000)
    if(){
        resolve()
    }
    else{
        // reject( console.log("에러"))
    }
    

}
);

wait1seconds.then( (result) => {
    console.log("프라미스 이행완료");
}).catch( () => {
    
});
