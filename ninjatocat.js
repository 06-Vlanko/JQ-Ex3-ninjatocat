$(document).ready (function () {
    //posts either a ninja image or a cat image when the page is loaded
    $('#wrapper div').children('img').each (function () {
        $(this).attr('src', setImages(this));
    })
    //resets the puzzle and posts either a ninja image or a cat image when the page is loaded
    $('#wrapper button').click (function () {
        $('#wrapper div').children('img').each(function () {
            $(this).attr('src', setImages(this));
        })
    })
    //changes the image when clicked
    $('#wrapper div img').click (function() {
        //pulls the first character of the image name (either n or c)
        var imageType = ($(this).attr ('src'))[6];
        //depending on the 1st letter it will construct the path to change the current image
        if (imageType === 'c') {
            $(this).attr ('src', './img/'+'ninja'+$(this).attr('img-pos')+'.png');
        } else {
            $(this).attr ('src', './img/'+'cat'+$(this).attr('img-pos')+'.png');
        }
    })
})
//generates a path to either a cat image or a ninja image
function setImages (obj) {
    var source='';
    if (Math.floor(Math.random()*2)+1==1) {
        source = $(obj).attr('alt-src1');
    } else {
        source = $(obj).attr('alt-src2');
    }
    return './img/'+source+$(obj).attr('img-pos')+'.png';
}