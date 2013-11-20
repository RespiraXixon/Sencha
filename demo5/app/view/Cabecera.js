Ext.define('demo5.view.Cabecera', {
    extend: 'Ext.Panel',
    xtype: 'cabecera',

    config: {
        items: [
            {
                xtype: 'container',
                items: [
                    {
                        xtype: 'textfield',
                        id: 'texto',
                        label: 'Botón Pulsado',
                        labelWidth: '80%',
                        readOnly: true
                    }
                ]
            }        
            ]
    }
});
