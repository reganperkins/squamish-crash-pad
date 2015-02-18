angular.module('squamishApp')
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      $stateProvider
      .state('squamish-house', {
        url: '/squamish-house',
        templateUrl: 'SquamishHouse/squamishHouse.html',
        controller: 'MainCtrl',
      })
      //each booking will need an id for payment
      .state('booking', {
        url:'/booking/{id}',
        templateUrl: 'Booking/booking.html',
        controller: 'BookingCtrl'
      })
      //will payment need its own id? maybe for confirmation?
      .state('payment', {
        url:'/payment/{id}',
        templateUrl: 'Payment/payment.html',
        controller: 'PaymentCtrl'
      })

      $urlRouterProvider.otherwise('squamish-house');

    }
  ]);