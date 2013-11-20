Ext.define('demo6.view.phone.Main', {
    extend: 'Ext.Panel',
    alias: 'widget.main',

    config: {
        items: [
   	        {
	        	xtype: 'titlebar',
	        	docked: 'top',
    			title: 'Estas con el Profile Phone'
	        },
            {
                xtype: 'cabecera'
            },
            {
                xtype: 'botonera' 
            }
        ]
    }
});
