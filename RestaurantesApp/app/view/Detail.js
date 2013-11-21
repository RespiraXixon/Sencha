/**
 * @author opendata
 */

 Ext.define('RestaurantesApp.view.Details', {
 	extend: 'Ext.Container',
 	xtype: 'details',
 	requires: [
 		'Ext.TitleBar'
 	],
 	
 	config: {
 		layout: 'fit',
 		baseCls: 'x-details',
 		title: 'Detalle',
 		items: [
 			{
                id: 'contenido',
                tpl: [
                    '<div class="top">',
                    '<div class="headshot" style="background-image:url({foto});"></div>',
                    '<div class="name">{nombre}',
                    '<tpl for="direcciones"><span>{content}</span><br/></tpl>',
                    '<span>{telefono}</span></div>',
                    '</div>'
                ].join('')
            }
 		]
 	},
    updateRecord: function(newRecord) {
        if (newRecord) {
            this.down('#contenido').setData(newRecord.data);
        }
    }

 });