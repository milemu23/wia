//Michelle Munksgard
//chart js
    var barSpacing = 0;
	var barWidth = 0;
	var chartHeight = 0;
	var chartHeightArea = 0;
	var chartScale = 0;
	var maxValue = 0;
	var highestYlabel = 0;
	var valueMultiplier = 0;

$(function(){
    
    if (Modernizr.canvas) {
  // Browser supports native HTML5 canvas.
} else {
  alert("Your browser does not allow the use of HTML5 canvas.");
}
    
    
    window.chartHeight = Number($('.chart-area').height());
	window.barWidth = $('.chart-area .chart-bar').width();
	window.highestYlabel = Number($('.chart-y-axis p').first().html());
	window.chartHeightArea = window.chartHeight - Number($('p.axis-value').first().height());
	window.chartScale = chartHeightArea / window.highestYlabel;
	window.barSpacing = Number($('.chart-area').attr('bar-spacing'));
    
    positionBars();
    
    //interactive map
    $('#diagramForm').change(function(){
     var selectedNumber = $('#diagramForm option:selected').val();
    
    if( selectedNumber == 'select' ){
        $('a.numberDot').show(1000);
    }else{
        $('a.numberDot[steps*="'+selectedNumber+'"]').show(1000);
        $('a.numberDot[steps!="'+selectedNumber+'"]').hide(1000);
    }
    });
    
    $('a.numberDot').click(function(){
        //alert( $(this).attr('steps') );   
        
        $('a.numberDot').removeClass('selected');
        $(this).addClass('selected');
        
        var step = '.step_detail#' + $(this).attr('steps');
        var htmlCode = $(step).html();
        
        $('.detail_container').fadeOut(500, function(){
            $('.detail_container .step_detail').html(htmlCode); 
            $('.detail_container').fadeIn(500);
        });
    });
    
    $(function(){
       $('.fancybox').fancybox();
    });
    
    $(function(){
       $("#a4hLogo").lettering();
    });
    
    
    
});

function positionBars(){
  //determine chart-bar amount - each one - idx count
    $('.chart-area .chart-bar').each(function(index){
        //create bar sizes and spacing for each bars
        var barPosition = (window.barWidth * index) + (index * barSpacing) + barSpacing;
        //set left css property to barPosition
        $(this).css('left', barPosition + 'px');
        //add paragraph
        $(this).html('<p>' + $(this).attr('bar-value') + '</p>');
        //line up on x-axis and append and add paragraph- add label
        $('.chart-x-axis').append('<p style="left:'+ (barPosition - (window.barWidth/2)) + 'px;">' + $(this).attr('label') + '</p>');
        
        //sets up to calculate bar value
        var barValue = Number($(this).attr('bar-value'));
        if(barValue > window.maxValue){
            window.maxValue = barValue;
            //amount each value will be divided by
            window.valueMultiplier = window.maxValue / window.highestYlabel;
        }
    });
    animateChart();
}

//animate bars

function animateChart(){
    $('.chart-area .chart-bar').each(function(index){
        //search for chart bar
        var revisedValue = Number($(this).attr('bar-value')) * window.chartScale;
        var newDelay = 125*index;
        $(this).delay(newDelay).animate({height: revisedValue}, 1000, function(){
         //call back function   
        //animate paragraph tags
            $(this).children('p').delay(500).fadeIn(250);
        });
        
    });   

}

