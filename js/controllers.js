var myApp=angular.module('starter.controllers', ['ngCordova','ngclipboard','djds4rce.angular-socialshare'])
myApp.factory('Data',function(){
    return{
        id:''
    };
});



myApp.run(function($FB){
  $FB.init('166096837109790');
});


myApp.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/navigation/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

myApp.controller('HomeController', function($scope,$stateParams) {
  $scope.categories = [
    { title: 'Inspirational', id: "Inspirational",img:'1.jpg' },
    { title: 'Motivational', id: "Motivational",img:'2.jpg' },
    { title: 'Friendship', id: "Friendship",img:'3.jpg' },
    { title: 'Love', id: "Love",img:'4.jpg' },
    { title: 'Funny', id: "Funny",img:'5.jpg'},
    { title: 'Woman', id: "Woman",img:'6.jpg' }
  ];
    
})

myApp.controller('Home1Controller',function($scope,$http){
     $scope.categories = [
    { title: 'Inspirational', id: "Inspirational",img:'1.jpg' },
    { title: 'Motivational', id: "Motivational",img:'2.jpg' },
    { title: 'Friendship', id: "Friendship",img:'3.jpg' },
    { title: 'Love', id: "Love",img:'4.jpg' },
    { title: 'Funny', id: "Funny",img:'5.jpg'},
    { title: 'Woman', id: "Woman",img:'6.jpg' }
  ];
    
})

myApp.controller('ListingController', function($scope, $stateParams, $http,Data) {
    console.log($stateParams);
    Data.id=$stateParams.categoryId;
    $scope.header=Data.id;
    $http.get('json/category'+$stateParams.categoryId+'.json',{}).success(function(data){
			$scope.lists = data;
		});
})

myApp.controller('Listing1Controller', function($scope, $stateParams, $http,Data) {
    console.log($stateParams);
    Data.id=$stateParams.categoryId;
    $scope.header=Data.id;
    $http.get('json/category1'+$stateParams.categoryId+'.json',{}).success(function(data){
			$scope.lists = data;
		});
})

myApp.controller('Touch1Controller', function($scope, $stateParams, $cordovaMedia, $ionicLoading, $stateParams,Data,$http)       {
    
    $http.get('json/category1'+Data.id+'.json',{}).success(function(data){
			$scope.lists = data;
        
    });
    var x=Data.id;
    
    $scope.message=x;
     $http.get('json/category1'+Data.id+'.json',{}).success(function(data){
         $scope.lists = data;
         
         for(i=0;i<data.length;i++){
             if(data[i].id==$stateParams.listId){
                 $scope.touchPageData=data[i].img;
                 $scope.demo=data[i].title;
                 $scope.header=data[i].head;
                 break;
             }
         }
		});
    console.log($stateParams);
    $scope.previousCanvas=function(){
        $stateParams.listId=(Number($stateParams.listId))-1;
        
        if($stateParams.listId <= 1){
            $stateParams.listId = 1;
            //$scope.isPrev = false;
        }
        
        
        
         $http.get('json/category1'+Data.id+'.json',{}).success(function(data){
			$scope.lists = data;
             if($stateParams.listId>=data.length)
                 {
                     $stateParams.listId=data.length;
                 }
         for(i=0;i<data.length;i++){
             if(data[i].id==($stateParams.listId)){
                 $scope.touchPageData=data[i].img;
                 $scope.demo=data[i].title;
                 $scope.header=data[i].head;
                 break;
             }
         }
		});

    }
    $scope.reset = function() {
       // Example with 2 arguments
        console.log("copy");
        console.log($scope.demo);
       angular.copy("hiiiii");
        console.log("copy1");
     }
      $scope.nextCanvas=function(){
          
          $stateParams.listId=(Number($stateParams.listId))+1;
           if($stateParams.listId <= 1){
            $stateParams.listId = 1;
            //$scope.isPrev = false;
        }
            
         $http.get('json/category1'+Data.id+'.json',{}).success(function(data){
			$scope.lists = data;
                      if($stateParams.listId>=data.length)
                 {
                     $stateParams.listId=data.length;
                 }
         for(i=0;i<data.length;i++){
             if(data[i].id==($stateParams.listId)){
                 $scope.touchPageData=data[i].img;
                 $scope.demo=data[i].title;
                 $scope.header=data[i].head;
                 break;
             }
         }
		});
    }  
})


myApp.controller('TouchController', function($scope, $stateParams, $cordovaMedia, $ionicLoading, $stateParams,Data,$http)       {
    
    $http.get('json/category'+Data.id+'.json',{}).success(function(data){
			$scope.lists = data;
        
    });
    var x=Data.id;
    
    $scope.message=x;
     $http.get('json/category'+Data.id+'.json',{}).success(function(data){
         $scope.lists = data;
         
         for(i=0;i<data.length;i++){
             if(data[i].id==$stateParams.listId){
                 $scope.touchPageData=data[i].img;
                 $scope.demo=data[i].head;
                 break;
             }
         }
		});
    console.log($stateParams);
    $scope.previousCanvas=function(){
        $stateParams.listId=(Number($stateParams.listId))-1;
        
        if($stateParams.listId <= 1){
            $stateParams.listId = 1;
            //$scope.isPrev = false;
        }
        
        
        
         $http.get('json/category'+Data.id+'.json',{}).success(function(data){
			$scope.lists = data;
             if($stateParams.listId>=data.length)
                 {
                     $stateParams.listId=data.length;
                 }
         for(i=0;i<data.length;i++){
             if(data[i].id==($stateParams.listId)){
                 $scope.touchPageData=data[i].img;
                 $scope.demo=data[i].head;
                 break;
             }
         }
		});

    }
    
      $scope.nextCanvas=function(){
          
          $stateParams.listId=(Number($stateParams.listId))+1;
           if($stateParams.listId <= 1){
            $stateParams.listId = 1;
            //$scope.isPrev = false;
        }
            
         $http.get('json/category'+Data.id+'.json',{}).success(function(data){
			$scope.lists = data;
                      if($stateParams.listId>=data.length)
                 {
                     $stateParams.listId=data.length;
                 }
         for(i=0;i<data.length;i++){
             if(data[i].id==($stateParams.listId)){
                 $scope.touchPageData=data[i].img;
                 $scope.demo=data[i].head;
                 break;
             }
         }
		});
    }  
});
