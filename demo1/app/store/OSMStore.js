Ext.define('demo1.store.OSMStore', {
    extend: 'Ext.data.Store',
    requires: [
        'demo1.model.OSMModel'
    ],
    config: {
    	//autoload: true,
        model: 'demo1.model.OSMModel',
        storeId: 'OSMStore',
        proxy: {
            type: 'jsonp',
            url: 'http://nominatim.openstreetmap.org/search?q=picos en+asturias&format=json',
            callbackKey: 'json_callback',
            reader: {
                type: 'json'
            }
        }
    }
});