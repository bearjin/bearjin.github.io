// range 설정
var $sliders = $(".skip_step"),
    allValues = [],
    $form_value_min = $(".form_value_min"),
    $form_value_max = $(".form_value_max");

$sliders.each(function(index, item){
    var menu = $(".filter_wrap").data("menu"),
        type = $(item).data("type");

    noUiSlider.create(item, {
        start: [filterData[menu][type].min, filterData[menu][type].max],
        connect: true,
        range: {
            'min': filterData[menu][type].min,
            'max': filterData[menu][type].max
        },
        step: 50,
        margin: 50,
        tooltips: [true, true],
        format: {
        from: function(value) {
                return parseInt(value);
            },
        to: function(value) {
                return parseInt(value);
            }
        }
    });

    allValues.push($sliders[index].noUiSlider.get());
    $(item).parent(".range").find(".value-lower").text(allValues[index][0] + "이하");
    $(item).parent(".range").find(".value-upper").text(allValues[index][1] + "이상");

    item.noUiSlider.on("update", function(values, handle){
        $form_value_min[index].value = values[0];
        $form_value_max[index].value = values[1];
    });
});

// 필터 타입 input 생성
(function(){
    var menu = $(".filter_wrap").data("menu"),
        html = "";

    $.each(filterData[menu].type , function(index, item){
        html += "<li>"
        html +=     "<input type='checkbox' id='item_type"+ index +"' class='item_type' name='item_type' value='"+ item +"'><label for='item_type"+ index +"'>"+ item +"</label>"
        html += "</li>"
    });

    $(".type_wrap").find("ul").html(html);
})();

// 필터 ks input 생성
(function(){
    var menu = $(".filter_wrap").data("menu"),
        html = "";

    $.each(filterData[menu].ks , function(index, item){
        html += "<li>"
        html +=     "<input type='checkbox' id='item_ks"+ index +"' class='item_ks' name='item_ks' value='"+ item +"'><label for='item_ks"+ index +"'>"+ item +"</label>"
        html += "</li>"
    });

    $(".ks_wrap").find("ul").html(html);
})();

// 검색버튼 데이터 전달
$("#searchBtn").on("click", function(){
    var typeValue = [],
        ksValue = [];

    $(".check_wrap").find("input").each(function(index, item){    
        if($(item).prop("checked")){
            if($(item).is(".item_type")){
                typeValue.push($(item).val());
            }
            if($(item).is(".item_ks")){
                ksValue.push($(item).val());
            }
        }
    });

    sendData.horizontal = $sliders[0].noUiSlider.get();
    sendData.vertical = $sliders[1].noUiSlider.get();
    sendData.width = $sliders[2].noUiSlider.get();
    sendData.type = typeValue;
    sendData.ks = ksValue;

    console.log(sendData);
});


// 제품리스트 생성
(function(){ 
    var html = "";

    $.each(getData.type1 , function(index, item){
        var first_li;

        if(index % 4 == 0){
            first_li = "first";
        }else{
            first_li = "";
        }
        html += "<li class='" + first_li + "'>"
        html +=     "<a href='javascript:openPop("+index+");'>"
        html +=         "<div class='tit_box'>"
        html +=             "<h3>"+ item.productName +"</h3>"
        html +=             "<p>" + item.productNum +"</p>"
        html +=         "</div>"
        html +=         "<img src='/img/product/" + item.imageSrc + ".jpg' alt=''>"
        html +=     "</a>"
        html += "</li>"
    });

    $(".product_list").find("ul").html(html);
})();

// 제품 팝업 생성
function openPop(productIdx){
    var $productPop = $("#productPop"),
        $img = $productPop.find(".img_area"),
        $info = $productPop.find(".info_area");

        $img.find("img").attr("src", "/img/product/" + getData.type1[productIdx].imageSrc + ".jpg");
        $info.find("h3").text(getData.type1[productIdx].productName);
        $info.find("p").text(getData.type1[productIdx].productNum);
        $info.find(".info_ks").text(getData.type1[productIdx].ks);
        $info.find(".info_size").text(getData.type1[productIdx].size.horizontal + "x" + getData.type1[productIdx].size.vertical + "x" + getData.type1[productIdx].size.width + "mm");
        $info.find(".info_volume").text(getData.type1[productIdx].volume);

        $productPop.addClass("open");
}

// 제품 팝업 닫기
function closePop(){
    $("#productPop").removeClass("open");
}