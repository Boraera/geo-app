'use strict';

angular.module('conFusion.services', ['ngResource'])
//  .constant("baseURL","http://localhost:3000/") 
    .constant("baseURL","http://10.32.1.197:3000/")
        
.factory('musicianFactory', ['$resource', 'baseURL', function($resource,baseURL) {  
            return $resource(baseURL+"musicians/:id");

        }])

.factory('eventsFactory', ['$resource', 'baseURL', function($resource,baseURL) {
            return $resource(baseURL+"events/:id");

        }])

.factory('ourmusicFactory', ['$resource', 'baseURL', function($resource,baseURL) {
            return $resource(baseURL+"ourmusic/:id");
        }])
;
