Ext.define('demo1.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'demo1.store.OSMStore'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Demo1',
                iconCls: 'home',
				layout: 'fit',
                styleHtmlContent: true,
                scrollable: true,

                items: [
                	{
	                    docked: 'top',
	                    xtype: 'titlebar',
	                    title: 'Picos de Asturias'
                	},
                	{
                		xtype: 'dataview',
                		layout: 'card',
                		store: 'OSMStore',
                		itemTpl: '<div>{display_name} ------->  Coordenadas (lat,lon): {lat}, {lon}</div>'
                	}
                ]
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});
