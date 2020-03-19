var filterData = {
    // 데이터 한번에

    // 양변기
    type1 : { horizontal : { min : 200, max : 630 }, vertical : { min : 155, max : 420 }, width : { min : 100, max : 700 }, type : ["전체", "로탱크원피스", "벽걸이양변기", "비데일체형", "유아용"], ks : ["전체", "C2020CR", "C1210AR", "C310R", "C1510C", "C58797"]},
    // 세면기
    type2 : { horizontal : { min : 355, max : 420 }, vertical : { min : 500, max : 700 }, width : { min : 680, max : 730 }, type : ["전체", "로탱크원피스", "벽걸이양변기", "비데일체형", "유아용"], ks : ["전체", "C2020CR", "C1210AR", "C310R", "C1510C", "C58797"]},
    // 소변기
    type3 : { horizontal : { min : 355, max : 420 }, vertical : { min : 800, max : 300 }, width : { min : 200, max : 500 }, type : ["전체", "로탱크원피스", "벽걸이양변기", "비데일체형", "유아용"], ks : ["전체", "C2020CR", "C1210AR", "C310R", "C1510C", "C58797"]}
}

var sendData = { horizontal : {}, vertical : {}, width : {}, type : {}, ks : {} };

var getData = {
    type1 : [
        {productNum : "C-600", productName : "로탱크원피스", ks : "친환경",  color : "", imageSrc : "BC-205[7]", size : { horizontal : 695, vertical : 415, width : 535}, volume : 6 },
        {productNum : "C-601", productName : "벽걸이 양변기", ks : "친환경",  color : "", imageSrc : "C-710[2]", size : { horizontal : 415, vertical : 333, width : 875}, volume : 3 },
        {productNum : "C-602", productName : "비데일체형", ks : "친환경",  color : "", imageSrc : "C-841[4]", size : { horizontal : 222, vertical : 658, width : 125}, volume : 9 },
        {productNum : "C-603", productName : "유아용", ks : "친환경",  color : "", imageSrc : "C-992F[4]", size : { horizontal : 555, vertical : 666, width : 777}, volume : 6 },
        {productNum : "C-604", productName : "유아용 양변기", ks : "친환경",  color : "", imageSrc : "L254D[2]", size : { horizontal : 777, vertical : 888, width : 999}, volume : 7 }
    ]
}