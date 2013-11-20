Ext.define('demo6.view.tablet.Main', {
    extend: 'Ext.Panel',
    alias: 'widget.main',

    config: {
        items: [
	        {
	        	xtype: 'titlebar',
	        	docked: 'top',
    			title: 'Estas con el Profile Tablet'
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
