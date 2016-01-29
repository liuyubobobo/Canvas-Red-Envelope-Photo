window.onload = function(){
    console.log("window onload")
    changeFilter("grayscale")
}

function changeFilter(filtername){

    //console.log( "filter change " + filtername )
    $(".button").css("background-color","#058")
    $("#"+filtername).css("background-color","red")

    $("#filter-name").text(filtername)
    if( filtername == "grayscale" ){
        $("#filter-image").css("filter","grayscale(1)")
        $("#filter-image").css("-webkit-filter","grayscale(1)")
        $("#filter-image").css("-moz-filter","grayscale(1)")
        $("#filter-image").css("-ms-filter","grayscale(1)")
        $("#filter-image").css("-o-filter","grayscale(1)")
        $("#code").text("filter: grayscale(1)")
        $("#default").text("default: 100%")
    }
    else if( filtername == "sepia" ){
        $("#filter-image").css("filter","sepia(1)")
        $("#filter-image").css("-webkit-filter","sepia(1)")
        $("#filter-image").css("-moz-filter","sepia(1)")
        $("#filter-image").css("-ms-filter","sepia(1)")
        $("#filter-image").css("-o-filter","sepia(1)")
        $("#code").text("filter: sepia(1)")
        $("#default").text("default: 100%")
    }
    else if( filtername == "saturate" ){
        $("#filter-image").css("filter","saturate(3)")
        $("#filter-image").css("-webkit-filter","saturate(3)")
        $("#filter-image").css("-moz-filter","saturate(3)")
        $("#filter-image").css("-ms-filter","saturate(3)")
        $("#filter-image").css("-o-filter","saturate(3)")
        $("#code").text("filter: saturate(3)")
        $("#default").text("default: 100%")
    }
    else if( filtername == "hue-rotate" ){
        $("#filter-image").css("filter","hue-rotate(90deg)")
        $("#filter-image").css("-webkit-filter","hue-rotate(90deg)")
        $("#filter-image").css("-moz-filter","hue-rotate(90deg)")
        $("#filter-image").css("-ms-filter","hue-rotate(90deg)")
        $("#filter-image").css("-o-filter","hue-rotate(90deg)")
        $("#code").text("filter: hue-rotate(90deg)")
        $("#default").text("default: 0deg")
    }
    else if( filtername == "invert" ){
        $("#filter-image").css("filter","invert(1)")
        $("#filter-image").css("-webkit-filter","invert(1)")
        $("#filter-image").css("-moz-filter","invert(1)")
        $("#filter-image").css("-ms-filter","invert(1)")
        $("#filter-image").css("-o-filter","invert(1)")
        $("#code").text("filter: invert(1)")
        $("#default").text("default: 100%")
    }
    else if( filtername == "opacity" ){
        $("#filter-image").css("filter","opacity(0.2)")
        $("#filter-image").css("-webkit-filter","opacity(0.2)")
        $("#filter-image").css("-moz-filter","opacity(0.2)")
        $("#filter-image").css("-ms-filter","opacity(0.2)")
        $("#filter-image").css("-o-filter","opacity(0.2)")
        $("#code").text("filter: opacity(0.2)")
        $("#default").text("default: 100%")
    }
    else if( filtername == "brightness" ){
        $("#filter-image").css("filter","brightness(0.5)")
        $("#filter-image").css("-webkit-filter","brightness(0.5)")
        $("#filter-image").css("-moz-filter","brightness(0.5)")
        $("#filter-image").css("-ms-filter","brightness(0.5)")
        $("#filter-image").css("-o-filter","brightness(0.5)")
        $("#code").text("filter: brightness(0.5)")
        $("#default").text("default: 100%")
    }
    else if( filtername == "contrast" ){
        $("#filter-image").css("filter","contrast(2)")
        $("#filter-image").css("-webkit-filter","contrast(2)")
        $("#filter-image").css("-moz-filter","contrast(2)")
        $("#filter-image").css("-ms-filter","contrast(2)")
        $("#filter-image").css("-o-filter","contrast(2)")
        $("#code").text("filter: contrast(2)")
        $("#default").text("default: 100%")
    }
    else if( filtername == "blur" ){
        $("#filter-image").css("filter","blur(10px)")
        $("#filter-image").css("-webkit-filter","blur(10px)")
        $("#filter-image").css("-moz-filter","blur(10px)")
        $("#filter-image").css("-ms-filter","blur(10px)")
        $("#filter-image").css("-o-filter","blur(10px)")
        $("#code").text("filter: blur(10px)")
        $("#default").text("default: 0")
    }
    else if( filtername == "drop-shadow" ){
        $("#filter-image").css("filter","drop-shadow(10px 10px 2px #aaa)")
        $("#filter-image").css("-webkit-filter","drop-shadow(10px 10px 2px #aaa)")
        $("#filter-image").css("-moz-filter","drop-shadow(10px 10px 2px #aaa)")
        $("#filter-image").css("-ms-filter","drop-shadow(10px 10px 2px #aaa)")
        $("#filter-image").css("-o-filter","drop-shadow(10px 10px 2px #aaa)")
        $("#code").text("filter: drop-shadow(10px 10px 2px #aaa)")
        $("#default").text(" ")
    }
}