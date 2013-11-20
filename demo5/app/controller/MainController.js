Ext.define('demo5.controller.MainController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            Main: 'Main'
        },

        control: {
            "#boton1": {
                tap: 'onBoton1Tap'
            },
            "#boton2": {
                tap: 'onBoton2Tap'
            },
            "#boton3": {
                tap: 'onBoton3Tap'
            }
        }
    },

    onBoton1Tap: function(button, e, eOpts) {
        console.log("Boton1");
        Ext.getCmp("texto").setValue(1);
    },

    onBoton2Tap: function(button, e, eOpts) {
        console.log("Boton2");
        Ext.getCmp("texto").setValue(2);
    },

    onBoton3Tap: function(button, e, eOpts) {
        console.log("Boton3");
        Ext.getCmp("texto").setValue(3);
    }

});