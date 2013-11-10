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
				layout: 'fit',
                styleHtmlContent: true,
                scrollable: true,
				items: [
                	{
	                    docked: 'top',
	                    xtype: 'titlebar',
	                    title: 'Directorios'
                	},
                	{
                		xtype: 'dataview',
                		layout: 'fit',
                		store: 'DirectoriosStore',
                		itemTpl: '<div>Nombre {nombre} ------->Coordenadas (lat,lon): {localizacion}</div>'
                	}
                ]
            }   
        ]
    }
});
