Ext.define('appEstaciones.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar' ,
		'Ext.DataView'
    ],
    config: {   
    	layout:'fit',
        items: [
                {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Estaciones'
                },
                {
                xtype: "dataview",
				store: "Estaciones",
                itemTpl    : [
                         '{id}{titulo}'               
                    ]                
				}	
                ]
            }                   
});
