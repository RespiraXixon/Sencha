Ext.define('demo3.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        "demo3.store.DirectoriosStore"
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
		            {
		                title: 'Inicio',
		                iconCls: 'home',
		                layout:'fit',
		                layoutOnTabChange: true,
						items: [
								{
	                    			docked: 'top',
	                    			layout: 'fit',
	                    			xtype: 'titlebar',
	                    			title: 'Directorios'
				                },
								{
									xtype: 'container',
		                			title: 'Ficheros',
		                			layout: 'fit',
		                			scrollable: true,
		                			items: [
				                				{
				                					xtype: 'dataview',
				                					store: 'DirectoriosStore',
				                					itemTpl: '<div>Nombre {nombre} ------->Coordenadas (lat,lon): {localizacion} <br>'+
						                				 		'<tpl for="categorias"><small>{content}</small><br /></tpl>'+
				                				 			 '</div>'
				                				}
		                					]
								}                			
		                	]
		            }   
        	]
    }
});
