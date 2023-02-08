
widget.on('ready', ()=> {
   $(element).parent().css('border-radius', '20px');
   $(element).parent().parent().css('border-radius', '20px');
})
widget.on("beforedatapointtooltip", function (se, args){
	args.cancel=true;
});
	widget.on('render', function(sender,se){
		 
		//Symbol Types: "circle", "square", "diamond", "triangle", "triangle-down"
console.log(sender.queryResult.series[0])
			
		sender.queryResult.series[0].marker = {enabled: true, symbol : 'circle'};
		sender.queryResult.series[1].marker= {enabled: true, symbol : 'square'};
		sender.queryResult.series[2].marker = {enabled: true, symbol : 'diamond'};
		sender.queryResult.series[3].marker = {enabled: true, symbol : 'triangle'};
		sender.queryResult.series[4].marker = {enabled: true, symbol : 'triangle-down'};
		

})
widget.on('processresult', function(se, ev){
	ev.result.plotOptions.column.grouping = false
	ev.result.tooltip.shared = true
	ev.result.tooltip.enabled = true
	
	$.each(ev.result.series, function(index, value){
		value.borderWidth = 1
		value.borderColor = value.color
		value.pointPadding = 0.1 * (index+1)
		
		$.each(value.data, function(dataIndex, dataValue){
			dataValue.color = Highcharts.color(dataValue.color).setOpacity(0.6).get('rgba')
			
		})
		
		value.color = Highcharts.color(value.color).setOpacity(0.6).get('rgba')
		
	})
})

