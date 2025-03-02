# Pedantic Semantic CTA Link Generator - HTML only


### html email CTA Link generator by Matthieu Solente


Based on [Mark Robbins](https://www.goodemailcode.com/email-code/link-button) pedantic semantics cta link, but for which I ultimately developed my own approach with a calculation and a different unit of measurement for the padding. Instead of percentage, I use point values.


From its code for a CTA in html, I created this generator that automatically generates the right measures in em, for better accessibility. The peculiarity of this button is that it uses the mso-font-width and mso-text-raise attributes to set the padding on Outlook. I

Define your **body font size** first. Then adjust your cta link **font size**, **padding**, **border**, **border-radius**, **color** and **background-color**. Choose your **font family**, choose between **small and big caps**, and finaly ! 

The contrast checcker was inspired by the one found on [webaim](https://webaim.org/resources/contrastchecker/), Most of the code comes from [Alvaro Montoro](https://dev.to/alvaromontoro/building-your-own-color-contrast-checker-4j7o), Himself having taken the code on Stackoverflow.

**Once satisfied, hover the code block and copy it by clicking on the small icon** (on the top right)


### Top and bottom padding

To reproduce the vertical padding and get the em value, we take the value indicated by the user and divide it by the overall font size
```javascript
emTbPadding = ($('#tbPadding').val() / $('#fontBase').val()).toFixed(1)+'em';
```
### Left and right padding   

To reproduce the vertical padding and get the em value, we take the value indicated by the user and divide it by the overall font size
 
```javascript
emLrPadding = ($('#lrPadding').val() / $('#fontBase').val()).toFixed(1)+'em';
```  
### mso-font-width  

To indicate the value of the mso-font-width property: we take the horizontal padding, which we divide by the global font size. We then divide the local policy by the global policy. Then, we divide the first value by the second. Finally, we multiply the result by 100 to get the percentage.

```javascript
msoFontWidth = Math.ceil(($('#lrPadding').val() / $('#fontBase').val()) / ($('#fontSize').val() / $('#fontBase').val())*100)+'%';
```
### Vertical padding for Outlook 

In Mark version, he uses percentage. To obtain the value of the mso-text-raise property, same thing, except that we take the vertical padding, and multiply the result by two

```javascript
msoTextRaise = Math.ceil(($('#tbPadding').val() / $('#fontBase').val()) / ($('#fontSize').val() / $('#fontBase').val())*100)*2+'%';
```
### Horizontal padding for Outlook 

To obtain the value of the mso-text-raise property, same thing, except that we take the vertical padding.
```javascript
htmlMsoTextRaise = Math.ceil(($('#tbPadding').val()/$('#fontBase').val()) / ($('#fontSize').val() / $('#fontBase').val())*100)+'%';
```

## Update 2025

Mark's version is perfect for his pure html version. After hours of research to add a vml version on top, I realized that the code could be simplified. For the vertical padding values, I therefore use point units. A positive value for the padding-bottom, and a negative value for the padding-top. The conditional code is therefore simplified, and in my opinion, easier to understand.


```javascript
msoTextRaise =(($('#tbPadding').val() * 75 / 100).toFixed(2)+'pt';
```

We take the vertical padding and multiply it by 75 divided by 100 to obtain the point value. 

We can therefore simplify the formula as follows. There are therefore only two <i> tags which surround the link text.

```
<!--[if mso]><i style="mso-font-width:250%;mso-text-raise:3.00pt" hidden>&emsp;</i><![endif]-->Show me the button!<!--[if mso]><i style="mso-font-width:250%;mso-text-raise:-3.00pt" hidden>&emsp;&#8203;</i><![endif]-->
```

So try it and enjoy !! Of course, if you notice any areas for improvement, don't hesitate to let me know!
