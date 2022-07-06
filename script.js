$("button").click(function() {
    let val1 = $(".1").val();
    let val2 = $(".2").val();
    let val3 = $(".3").val();
    let result = (73 - Number(val1)) * Number(val2) + Number(val3);
    $(".result").text(result);
});