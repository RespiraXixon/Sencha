Ext.define('demo3.store.DirectoriosStore', {
    extend: 'Ext.data.Store',

    requires: ["demo3.model.DirectorioModel"],

    config: {
        autoLoad: true,
        model: "demo3.model.DirectorioModel",
        storeId: 'DirectoriosStore',
        proxy: {
            type: 'ajax',
            url: 'datos/bibliotecas.json',
            reader: {
                type: 'json',
                rootProperty: "directorios.directorio"
            }
        }
    }
});