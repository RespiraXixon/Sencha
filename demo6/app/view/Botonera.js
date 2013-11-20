Ext.define('demo6.view.Botonera', {
    extend: 'Ext.Panel',
	xtype: 'botonera',

    config: {
        items: [
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
