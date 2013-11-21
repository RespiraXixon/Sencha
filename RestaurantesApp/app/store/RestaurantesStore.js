/**
 * @author opendata
 */

 Ext.define('RestaurantesApp.store.RestaurantesStore', {
 	extend: 'Ext.data.Store',
 	requires: [
 		'RestaurantesApp.model.RestauranteModel'
 	],
 	
 	config: {
 		autoLoad: true,
 		model:'RestaurantesApp.model.RestauranteModel',
 		storeId: 'RestaurantesStore',
 		proxy: {
 			type: 'ajax',
 			url: 'datos/restaurantes.json',
 			reader: {
 				type: 'json',
 				rootProperty: ' directorios.directorio'
 			}
 		}
 	}
 });