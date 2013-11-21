/**
 * @author opendata
 */

 Ext.define ('RestaurantesApp.model.RestauranteModel', {
 	extend: 'Ext.data.Model',
 	require: [
 		'RestaurantesApp.model.CategoriaModel',
 		'RestaurantesApp.model.DireccionModel'
 	],
 	
 	config: {
 		fields: [
 			{name: 'correo-electronico'},
 			{name: 'descripcion'},
 			{
 				name: 'direccion',
 				mapping: 'direccion.content'
 			},
 			{name: 'fax'},
 			{name: 'fecha-actualizacion'},
 			{
 				name: 'foto',
 				mapping:'foto.content'
 			},
 			{name: 'horario'},
 			{name: 'identificador'},
 			{name: 'locale'},
 			{
 				name: 'localizacion',
 				convert:function(value, record) {
                	if(value.content) {
                    	var coordenadas = value.content.split(' ');
                      	localizacion = coordenadas[0] + "," + coordenadas[1];
                  	}
                  	else {localizacion='No existe';}
                  	return localizacion;
              	}
 			},
 			{
 				name: 'nombre',
 				mapping: 'nombre.content'
 			},
 			{name: 'rdfa-id'},
 			{
 				name: 'telefono',
 				mapping: 'telefono.content'
 			},
 			{name: 'tipo'},
 			{name: 'url'},
 			{name: 'web'}
 		],
 		
 		hasMany: [
 			{
 				model: 'RestaurantesApp.model.CategoriaModel',
 				name: 'categorias',
 				associationKey: 'categorias.categoria'
 			},
 			
 			{
 				model: 'RestaurantesApp.model.DireccionModel',
 				name: 'direcciones',
 				associationKey: 'direccion'
 			}
 		]
 	}
 });