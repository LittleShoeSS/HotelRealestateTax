dashboard.on('widgetready',function(d) {
   $('.dashboard-layout-column').css('background-color', '#ffffff');
   $('.dashboard-layout').css('background-color', '#f0f0f0');
   $('.dashboard-layout-cell-horizontal-divider').remove();
   
   //For Edit Mode
   //$('.ui-resizable-handle.ui-resizable-e').css('width','0.5px'); //to make the vertical dividers invisible but still accessible - same row between widgets
   //$('.ui-resizable-handle.ui-resizable-s').css('height','0.5px'); //to make the vertical dividers invisible but still accessible- between rows    

   $('.dashboard-layout-subcell-vertical').css('background-color', 'white').css('box-shadow', '4px 5px 12px #00000078')

   $('.dashboard-layout-subcell-host').css('padding', '10');
   $('.dashboard-layout').css('padding-right', '20px');
   $('.dashboard-layout').css('padding-left', '20px');
});