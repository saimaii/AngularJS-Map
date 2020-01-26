'use strict';
 
var app = angular.module('myApp.home', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])
 
// Home controller

    app.controller('HomeCtrl', function($scope,$http) { 
        $scope.locationSearch = [];
        $scope.dataList =[];
        $scope.image =[];
       
        $scope.LocationSearch = function (locationSearch) {
            console.log("radius",locationSearch);
            $scope.radius = locationSearch.radius;
        }
        
            $http.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=18.7717874,98.9742796&radius=500&key=AIzaSyCZ1BCe4Q7YL1nCa_ovtet4Bjn52tT20T8")
            //$http.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=18.7717874,98.9742796&radius=55&key=AIzaSyCZ1BCe4Q7YL1nCa_ovtet4Bjn52tT20T8")
            .then(function(response){
            $scope.dataList = response.data.results;           
           console.log("datalist",$scope.dataList);  
                 
        });	
       
                  
        console.log('Google Maps API version: ' + google.maps.version);
        var locations = [
            {
                title: 'Chiang Mai',
                lat: 18.7952876,
                lng: 98.96200019999999
            },
            {
                title: 'VC@Suanpaak Boutique Hotel & Service Apartment',
                lat: 18.769896,
                lng: 98.973941
            },
            {
                title: 'The Airport Greenery',
                lat: 18.769368,
                lng: 98.9781366
            },
            {
                title: 'Budget Car Rental, Chiang Mai',
                lat: 18.77058599999999,
                lng: 98.976581
            },
            {
                title: 'CentralPlaza Chiang Mai Airport',
                lat: 18.7689369,
                lng: 98.97539359999999
            },
            {
                title: 'Chanhom',
                lat: 18.7695283,
                lng: 98.97700239999999
            },
            {
                title: 'New Look Home',
                lat: 18.7747723,
                lng: 98.97654329999999
            },{
                title: '2 storey townhome for daily weekly rent',
                lat:  18.7747216,
                lng: 98.9765372
            },{
                title: 'Townhouse 5 mins from Central Airport plaza changmai',
                lat: 18.7731237,
                lng: 98.97786970000001
            },{
                title: 'The Far Eastern University',
                lat: 18.771083,
                lng: 98.975229
            },{
                title: 'รถตู้เชียงใหม่ สำนักงานให้เช่ารถตู้ Vanchiangmai.com',
                lat: 18.770993,
                lng: 98.972933
            },{
                title: 'Somjit Air',
                lat: 18.7757086,
                lng: 98.97631229999999
            },{
                title: 'Watsons',
                lat: 18.7691949,
                lng: 98.97620859999999
            },{
                title: 'วัตสัน แอร์พอร์ต พลาซ่า',
                lat: 18.7689491,
                lng: 98.9753101
            },{
                title: 'นวดเพื่อสุขภาพชีวกโกมารภัจจ์ Thai Massage Shivagakomarpaj (Old Medicine Hospital)',
                lat: 18.771951,
                lng: 98.97816399999999
            }
            ,{
                title: 'The car rent Chiangmai',
                lat: 18.772294,
                lng: 98.971809
            },{
                title: 'ห้องอาหารจีนมังกรฟ้า',                
                lat: 18.7722032,
                lng: 98.9722687
            },{
                title: 'CLBS Ltd',                
                lat: 18.772465,
                lng: 98.97363299999999
            },{
                title: 'NIDA Rooms Tha Sala 89 Resort Mall',                
                lat: 18.7733028,
                lng: 98.9773611
            },{
                title: 'Suthep',                
                lat: 18.7910009,
                lng: 98.9607106
            }
        ]
    var searchImg=[
    {
        image:'https://lh3.googleusercontent.com/p/AF1QipMjda-vy-dJOZQTHw1MlDIGHDvA0YUlLS3vm5sT=s1600-w400'
    },
    {
        image:'https://lh3.googleusercontent.com/p/AF1QipMjda-vy-dJOZQTHw1MlDIGHDvA0YUlLS3vm5sT=s1600-w400'
    },
    {
        image:'https://lh3.googleusercontent.com/p/AF1QipMjda-vy-dJOZQTHw1MlDIGHDvA0YUlLS3vm5sT=s1600-w400'
    },
    {
        image:'https://lh3.googleusercontent.com/p/AF1QipMjda-vy-dJOZQTHw1MlDIGHDvA0YUlLS3vm5sT=s1600-w400'
    },
    {
        image:'https://lh3.googleusercontent.com/p/AF1QipMjda-vy-dJOZQTHw1MlDIGHDvA0YUlLS3vm5sT=s1600-w400'
    },
    {
        image:'https://lh3.googleusercontent.com/p/AF1QipMjda-vy-dJOZQTHw1MlDIGHDvA0YUlLS3vm5sT=s1600-w400'
    },
    {
        image:'https://lh3.googleusercontent.com/p/AF1QipMjda-vy-dJOZQTHw1MlDIGHDvA0YUlLS3vm5sT=s1600-w400'
    },
    {
        image:'https://lh3.googleusercontent.com/p/AF1QipMjda-vy-dJOZQTHw1MlDIGHDvA0YUlLS3vm5sT=s1600-w400'
    },
    {
        image:'https://lh3.googleusercontent.com/p/AF1QipMjda-vy-dJOZQTHw1MlDIGHDvA0YUlLS3vm5sT=s1600-w400'
    },
    {
        image:'https://lh3.googleusercontent.com/p/AF1QipMjda-vy-dJOZQTHw1MlDIGHDvA0YUlLS3vm5sT=s1600-w400'
    },{
        image:'https://lh3.googleusercontent.com/p/AF1QipMjda-vy-dJOZQTHw1MlDIGHDvA0YUlLS3vm5sT=s1600-w400'
    },{
        image:'https://lh3.googleusercontent.com/p/AF1QipMjda-vy-dJOZQTHw1MlDIGHDvA0YUlLS3vm5sT=s1600-w400'
    },{
        image:'https://lh3.googleusercontent.com/p/AF1QipMjda-vy-dJOZQTHw1MlDIGHDvA0YUlLS3vm5sT=s1600-w400'
    },{
        image:'https://lh3.googleusercontent.com/p/AF1QipMjda-vy-dJOZQTHw1MlDIGHDvA0YUlLS3vm5sT=s1600-w400'
    },{
        image:'https://lh3.googleusercontent.com/p/AF1QipMjda-vy-dJOZQTHw1MlDIGHDvA0YUlLS3vm5sT=s1600-w400'
    },{
        image:'https://lh3.googleusercontent.com/p/AF1QipMjda-vy-dJOZQTHw1MlDIGHDvA0YUlLS3vm5sT=s1600-w400'
    },{
        image:'https://lh3.googleusercontent.com/p/AF1QipMjda-vy-dJOZQTHw1MlDIGHDvA0YUlLS3vm5sT=s1600-w400'
    },{
        image:'https://lh3.googleusercontent.com/p/AF1QipMjda-vy-dJOZQTHw1MlDIGHDvA0YUlLS3vm5sT=s1600-w400'
    },{
        image:'https://lh3.googleusercontent.com/p/AF1QipMjda-vy-dJOZQTHw1MlDIGHDvA0YUlLS3vm5sT=s1600-w400'
    },
    ]
       var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: new google.maps.LatLng(18.772465,98.97363299999999),
            
        });
        angular.forEach(locations, function(location, index) {
            console.log('location ::==' + location.title);
            var marker = new google.maps.Marker({position: location, map: map, title: location.title});
            var infowindow = new google.maps.InfoWindow({content: location.title});
            marker.addListener('click',  function(event) {
                console.log(event);
                infowindow.open(map,marker);
            });
        });

        map.addListener('click', function(event) {
            console.log('latitude ::==' + event.latLng.lat());
            console.log('longtitude ::==' + event.latLng.lng());
            alert('Latitude ::=='+event.latLng.lat()+' \nLongitude ::=='+event.latLng.lng());
        });
    });
    app.filter('removeUnderscores', [function() {
        return function(string) {
            if (!angular.isString(string)) {
                return string;
            }
            return string.replace(/[/_/]/g, ' ');
         };
        }])
