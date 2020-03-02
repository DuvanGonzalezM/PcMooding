let procesador = 55000;
let ram = 58300;
let video = 100000;
Calcular();

function CambiarProcesador(e){
    $("#"+e.target.id).hide();
    $("#SpanProcesador").empty();
    $("#Procesador").attr('src','./img/ProcesadorMooding.jpg');
    $("#Procesador").css({
        'transition' : 'transform 2s',
        'transform' : 'rotate(360deg)'
    });
    $("#SpanProcesador").append("Intel Core I3 10th Gen");
    procesador = 562913;
    Calcular();
}
function CambiarTarjRam(e){
    $("#"+e.target.id).hide();
    $("#SpanTarjeta_Ram").empty();
    $("#Tarjeta_Ram").attr('src','./img/RamMooding.jpg');
    $("#Tarjeta_Ram").css({
        'transition' : 'transform 2s',
        'transform' : 'rotate(360deg)'
    });
    $("#SpanTarjeta_Ram").append("Ddr3 16gb 16000 Mhz");
    ram = 390000;
    Calcular();
}
function CambiarTarjVideo(e){
    $("#"+e.target.id).hide();
    $("#SpanTarjeta_Video").empty();
    $("#Tarjeta_Video").attr('src','./img/VideoMooding.jpg');
    $("#Tarjeta_Video").css({
        'transition' : 'transform 2s',
        'transform' : 'rotate(360deg)'
    });
    $("#SpanTarjeta_Video").append("Intel HD Graphics 5600");
    video = 320000;
    Calcular();
}

function Calcular(){
    $("#price").empty();
    let precio = procesador+ram+video+200000;
    $("#price").append(precio);
}