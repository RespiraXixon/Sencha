/**
 * @author opendata
 */

 Ext.define('RestaurantesApp.controller.MainController', {
 	extend: 'Ext.app.Controller',
 	config: {
 		refs: {
 			main: 'main',
 			lista: 'lista'
 		},
 		
 		control: {
 			main: {
                push: 'onMainPush',
                pop: 'onMainPop'
            },
 			lista: {
                itemtap: 'onListaSelect'
            }
            /*
			'#detail_btn': { // # especifica que "detail_btn" es un id 
				tap: 'onDetailTap'
			}*/
 		}
 	},
 	onMainPush: function(view, item) {
 		
 		//Deselecciono los elementos de la lista
 		
 		if (item.xtype == "details") {
            this.getLista().deselectAll();
        }
    },

    onMainPop: function(view, item) {
    	//Si quisiera hacer algo al salir del detalle este sería el sitio donde implementarlo
    },

 	onListaSelect: function(list, index, node, record) {

		//Comprobamos que no exista una vista para el detalle. Si no existe la creamos 		
        if (!this.listaItem) {
            this.listaItem = Ext.create('RestaurantesApp.view.Details');
        }

		//Asociamos el registro seleccionado en el evento al detalle
        this.listaItem.setRecord(record);

		//Hacemos un push en la vista de la lista para incluir el detalle
        this.getMain().push(this.listaItem);
    }
 	/*
 	onDetailTap: function(button,e,eOpts) {
 		console.log("entra");
 		console.log(e);
 		/*
 		var view = Ext.create('Ext.NavigationView', {
	    	fullscreen: true,
	        handler: function() {
	        	view.push({
	        		title: 'Detail',
	       			html: 'Detalle del restaurante!!'
	        	});
	        }
		});
 	}*/
 });