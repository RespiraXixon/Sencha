/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appEstaciones.model.Estacion', {
            extend : 'Ext.data.Model',

            config : {
                fields : [
                    'id',
                    { name : 'titulo', type : 'string' },
                    { name : 'latitud', type : 'string' },
                    { name : 'longitud', type : 'string' },
                    { name : 'direccion', type : 'string' },
                    { name : 'poblacion', type : 'string' },
                    { name : 'provincia', type : 'string' }
					
                ]
            }
        });
/*
            {
                "id": "1",
                "titulo": "Constituci&#243;n",
                "direccion": "Avda. Constituci&#243;n",
                "poblacion": "Gij&#243;n",
                "provincia": "Asturias",
                "latitud": "43.529806",
                "longitud": "-5.673428"
            }
 */