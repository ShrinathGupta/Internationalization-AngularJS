
angular.module('app', ['pascalprecht.translate'])
.config(function ($translateProvider) {

      $translateProvider.useStaticFilesLoader({   
        prefix: './locale/LOCALIZ_',            //lcoal directory address 
        suffix: '.json'                          //extension of file
      });  

   $translateProvider.preferredLanguage('en_US'); //Key should be value written after the prefix of file

  // we can also store the language in the cookies using angular cookies method useCookiesStorage(), 
  // $translateProvider.useCookiesStorage();
});



angular.module('app')

.controller('ctrl', ['$scope', '$translate', function($scope, $translate) {
  $scope.setLang = function(langKey) {
    // You can change the language during runtime
    $translate.use(langKey);
  }; 
}]);