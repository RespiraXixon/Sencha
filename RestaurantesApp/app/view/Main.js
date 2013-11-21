Ext.define('RestaurantesApp.view.Main', {
    //extend: 'Ext.Container',
	extend:'Ext.navigation.View',
    xtype:'main',
/*
    requires: [
    	'Ext.TitleBar',
    	'Ext.DataView'
    ],

    config: {
    	layout: 'fit',
    	items: [
    	
    		{
                docked:'top',
                xtype:'titlebar',
                title:'Restaurantes'
            },
            {
                xtype:'dataview',
                store:'RestaurantesStore',
                itemTpl: '<div>' +
                			'<img border=1 src="{foto}" width=150 height=150/><br>' +
                			'<button id="detail_btn">{nombre}</button>' +
                		 	//'Nombre: {nombre}<br>' + 
                		 	//'Coordenadas(lat,lon): {localizacion}' +
                		 	'<tpl for="direcciones"><small>{content}</small><br /></tpl>' +
                		 	//'<tpl for="categorias"><small>{content}</small><br /></tpl>' +
                		 '</div><br>',
				listeners:{
						afterrender:function(){
							new Ext.Button({
							text:'Button',
							ui:'action',
							renderTo:'renderbutton'
						});                	
            }
    	]
    }*/
    
    requires: [
        'RestaurantesApp.view.Lista'
    ],

    config: {
        layout: 'fit',
        autoDestroy: false,
        defaultBackButtonText: 'Volver',
        navigationBar: {
        },

        items: [
            { xtype: 'lista' }
        ]
    }
});
