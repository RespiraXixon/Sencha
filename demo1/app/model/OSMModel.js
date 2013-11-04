Ext.define('demo1.model.OSMModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                name: 'osm_id'
            },
            {
                name: 'display_name',
                type: 'string'
            },
            {
                name: 'lat',
                type: 'string'
            },
            {
                name: 'lon',
                type: 'string'
            },
            {
                name: 'class',
                type: 'string'
            },
            {
                name: 'type',
                type: 'string'
            }
        ]
    }
});