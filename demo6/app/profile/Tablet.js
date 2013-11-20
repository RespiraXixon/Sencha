Ext.define('demo6.profile.Tablet', {
    extend: 'demo6.profile.Base',

    config: {
        controllers: ['Main'],
        views: ['Main']
    },

    isActive: function() {
        return Ext.os.is.Tablet || Ext.os.is.Desktop;
    },

    launch: function() {
    	console.log("Tablet");
        Ext.Viewport.add(Ext.create('demo6.view.tablet.Main'));

        this.callParent();
    }
});
