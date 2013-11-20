Ext.define('demo6.controller.MainController', {
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
    }
});