/***********************************************/
/************ VML BUTTON CODE *******/
/***********************************************/
(function($){
 var bgColor,fontBase,fontValue,fontEm,urlLink,btnText,btnClass,cssBtnClass,fontColor,fontFamily,bRadius,bgcss,generateCode,generateCss,arcsize,msoTextRaise,emTbPadding,emLrPadding,msoFontWidth,htmlMsoTextRaise,fontBold,textTransform,generatePreview;
 
 function updateButton(){ 
    
    urlLink = $('#linkUrl').val();
    btnText = $('#btnText').val();
    if($.trim($('#btnClass').val()) !=''){
        btnClass = 'class="'+ $('#btnClass').val()+'"'; 
    }else{
           btnClass ='';  
    }
    cssBtnClass = '.' + $('#btnClass').val();
    fontFamily = $('#fontFamily').val();
    fontBase = $('#fontBase').val();
    fontValue = $('#fontSize').val();
    fontEm = ($('#fontSize').val()/$('#fontBase').val()).toFixed(1)+'em';
    fontColor = $('#fontColor').val();
    if( $.trim($('#bRadius').val())==''){
    bRadius='';
    } else {
      bRadius = 'border-radius:' + $('#bRadius').val()+'px;';
    }
    bgColor = $('#bgColor').val();
    bgcss = 'background-color:'+ $('#bgColor').val();
    emTbPadding = ($('#tbPadding').val() / $('#fontBase').val()).toFixed(1)+'em';
    emLrPadding = ($('#lrPadding').val() / $('#fontBase').val()).toFixed(1)+'em';
    msoFontWidth = Math.floor(($('#lrPadding').val() / $('#fontBase').val()) / ($('#fontSize').val() / $('#fontBase').val())*100)+'%';
     msoTextRaise =(($('#tbPadding').val() * 75 / 100)).toFixed(2)+'pt';
    if($('#fontBold').is(':checked')){
      fontBold = 'font-weight:bold;';
    }else{
      fontBold = '';
    }
    if($('#textTransform').is(':checked')){
      textTransform = 'text-transform:uppercase;';
    }else{
      textTransform = '';
    }
 
    generatePreview = '<a '+btnClass+' href="'+urlLink+'" style="font-family: '+fontFamily+'; font-size:'+fontEm+';background-color:'+ bgColor +';text-decoration: none;text-underline-color:'+bgColor+';'+textTransform+' padding: '+emTbPadding+' '+emLrPadding+'; color:'+fontColor+';'+fontBold+' display:inline-block; '+bRadius+'mso-padding-alt:0px;">\n<!--[if mso]><i style="mso-font-width:'+msoFontWidth+';mso-text-raise:'+msoTextRaise+'" hidden>&emsp;</i><![endif]-->'+btnText+'<!--[if mso]><i style="mso-font-width:'+msoFontWidth+';mso-text-raise:-'+msoTextRaise+'" hidden>&emsp;&#8203;</i><![endif]--></a>';
    generateCode = '&lt;a '+btnClass+' href=&quot;'+urlLink+'&quot; style=&quot;font-family: '+fontFamily+'; font-size:'+fontEm+';background-color:'+ bgColor +';text-decoration: none;text-underline-color:'+bgColor+';'+textTransform+' padding: '+emTbPadding+' '+emLrPadding+'; color:'+fontColor+';'+fontBold+' display:inline-block; '+bRadius+'mso-padding-alt:0px;&quot;&gt;\n&lt;i style=&quot;mso-font-width:'+msoFontWidth+';mso-text-raise:'+msoTextRaise+'&quot; hidden&gt;&amp;emsp;&lt;/i&gt;&lt;![endif]--&gt;'+btnText+'&lt;!--[if mso]&gt;&lt;!--[if mso]&gt;&lt;i style=&quot;mso-font-width:'+msoFontWidth+';mso-text-raise:-'+msoTextRaise+'&quot; hidden&gt;&amp;emsp;&amp;#8203;&lt;/i&gt;&lt;![endif]--&gt;&lt;/a&gt;'; 
   
  
  $('#preview').html(generatePreview);
  $('#code').html(generateCode);
}
updateButton();
/*end UpdateButton*/
$(document).ready(function(){
  updateButton();
});
$( "input, select" ).on('change',function() {
  updateButton();
});
})(jQuery);



/***********************************************/
/* COPY PASTE   */
/***********************************************/
function copyPaste(element) {
    var $temp = $("<textarea>");
    $("body").append($temp);
    $temp.val($(element).parent().find('.copyPaste').text()).select();
    document.execCommand("copy");
    $temp.remove();
}
/***********************************************/
/************ COPY TO CLIPBOARD FUNCTION *******/
/***********************************************/

  $('.copyPaste').wrap('<div class="copyPaste-block"></div>');   
    $('.copyPaste-block').each(function(){     
      $(this).append('<button type="button" class="copy" onclick="copyPaste(this)" aria-hidden="false" aria-label="Copy to clipboard"><span class="visually-hidden">Copy to Clipboard</span></button>');
    });
