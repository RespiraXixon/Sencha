Ext.define('demo5.view.Main', {
    extend: 'Ext.Panel',
    alias: 'widget.main',

    config: {
        items: [
            {
                xtype: 'cabecera'
            },
            {
                xtype: 'botonera' 
            }
        ]
    }
});
