var app1 = angular.module('app1',[]);

app1.run(function ($http) {
    // Sends this header with any AJAX request
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // Send this header only in post requests. Specifies you are sending a JSON object
    $http.defaults.headers.post['dataType'] = 'json'
});

app1.controller('MainCtrl',function ($scope,$http) {
    $scope.tweets1={};
    $scope.getData = function(){
        var req = $http.get('http://127.0.0.1:8081/get').then(function (value) {
            $scope.tweets = value.data.users;
            for(i =0; i <= $scope.tweets.length;i++){
                $scope.tweets1[i] = $scope.tweets[i].name;
            }
            console.log($scope.tweets1);
        });
        angular.forEach($scope.tweets1, function(key, value){
            console.log(value.data);
        });
    }
});
