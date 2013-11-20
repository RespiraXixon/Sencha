/**
 * @class Kitchensink.controller.tablet.Main
 * @extends Kitchensink.controller.Main
 *
 * This is the Main controller subclass for the 'tablet' profile. Almost all of the functionality is implemented in the
 * superclass, here we just define showView, which is the function that is called whenever any view is navigated to via
 * the navigation NestedList or a url change.
 */
Ext.define('demo6.controller.tablet.Main', {
    extend: 'demo6.controller.MainController',

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