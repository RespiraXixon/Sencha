/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('appEstaciones.store.Estaciones', {
	extend: 'Ext.data.Store',

    config: {
        model: 'appEstaciones.model.Estacion',
        proxy: {
            type: 'ajax',
            url : 'datos/estaciones_opendatagijon.json',
            reader: {
                type: "json",
                rootProperty: "estaciones.estacion"
            }
        },
        autoLoad: true
    }
});
