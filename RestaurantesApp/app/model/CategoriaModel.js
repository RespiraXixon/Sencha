/**
 * @author opendata
 */

 Ext.define ('RestaurantesApp.model.CategoriaModel', {
 	extend: 'Ext.data.Model',
 	config: {
 		fields: [
 			{name: 'content'},
 			{name: 'id'},
 			{name: 'rdfa-property'}
 		]		
 	}
 });