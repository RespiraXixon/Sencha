Ext.define('demo6.profile.Phone', {
    extend: 'demo6.profile.Base',

    config: {
        controllers: ['MainController'],
        views: ['Main']
    },

    isActive: function() {
        return Ext.os.is.Phone; // || Ext.os.is.Desktop;
    },

    launch: function() {
        Ext.create('demo6.view.Main');

        this.callParent();
    }
});
