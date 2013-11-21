Ext.define('RestaurantesApp.view.Lista', {
    extend: 'Ext.List',
    xtype: 'lista',

    config: {
        title: 'Restaurantes',
        store:'RestaurantesStore',
        itemTpl: [
        			'<div class="item" style="background-image:url({foto});"></div>',
                	'<tpl for="direcciones"><small>{content}</small><br /></tpl>',
                	'</div><br>'
        ].join('')
    }
});
