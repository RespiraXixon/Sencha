/**
 * @class Kitchensink.controller.phone.Main
 * @extends Kitchensink.controller.Main
 *
 * This is the Main controller subclass for the 'phone' profile. Most of the functionality required for this controller
 * is provided by the Kitchensink.controller.Main superclass, but we do need to add a couple of refs and control
 * statements to provide a slightly different behavior for the phone.
 *
 * The Main superclass provides a couple of capabilities that we use here. Firstly it sets up a listener on the main
 * navigation NestedList and redirects to the appropriate url for each view. For example, tapping on the 'Forms' item
 * in the list will redirect to the url 'demos/forms'.
 *
 * Secondly, it sets up a route that listens for urls in the form above and calls the controller's showView function
 * whenever one is detected. The showView function then just shows the appropriate view on the screen.
 *
 */
Ext.define('demo6.controller.phone.Main', {
    extend: 'demo6.controller.MainController',

    onBoton1Tap: function(button, e, eOpts) {
        console.log("Boton1");
        Ext.getCmp("texto").setValue('a');
    },

    onBoton2Tap: function(button, e, eOpts) {
        console.log("Boton2");
        Ext.getCmp("texto").setValue('b');
    },

    onBoton3Tap: function(button, e, eOpts) {
        console.log("Boton3");
        Ext.getCmp("texto").setValue('c');
    }
});