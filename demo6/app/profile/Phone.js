Ext.define('demo6.profile.Phone', {
    extend: 'demo6.profile.Base',

    config: {
        controllers: ['Main'],
        views: ['Main']
    },

    isActive: function() {
        return Ext.os.is.Phone; // || Ext.os.is.Desktop;
    },

    launch: function() {
    	console.log("Telefono");
         Ext.Viewport.add(Ext.create('demo6.view.phone.Main'));

        this.callParent();
    }
});
