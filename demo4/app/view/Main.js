Ext.define('demo4.view.Main', {
    extend: 'Ext.Panel',
    alias: 'widget.main',

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
            },
            {
                xtype: 'container',
                items: [
                    {
                        xtype: 'button',
                        id: 'boton1',
                        itemId: '',
                        text: 'Botón 1'
                    },
                    {
                        xtype: 'button',
                        id: 'boton2',
                        text: 'Botón 2'
                    },
                    {
                        xtype: 'button',
                        id: 'boton3',
                        text: 'Botón 3'
                    }
                ]
            }
        ]
    }

});
