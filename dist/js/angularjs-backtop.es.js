// import angular from 'angular';
// import $ from 'jquery';

var angularjsBacktop = angular.module('AngularjsBackTop', []).directive('angularjsBackTop', ['$window', '$document', '$compile', function ($window, $document, $compile) {
  return {
    restrict: 'EA',
    link: function link(scope, elem, attr) {
      var $scope = scope;
      var elShare = angular.element('<a title="返回顶部" ng-click="backTop()" class="angularjs-backtop"><i></i></a>');
      // const elShare = $(
      //   '<a title="返回顶部" ng-click="backTop()" class="angularjs-backtop"><i></i></a>'
      // );

      function showShare() {
        if (!elShare.hasClass('ng-scope')) {
          $compile(elShare)($scope);
          var body = $document.find('body').eq(0);
          body.append(elShare);
        }
        elShare.show();
      }

      var loading = false;

      $scope.backTop = function () {
        var idToScroll = attr.href;
        var $target = void 0;

        if (idToScroll) {
          $target = $(idToScroll);
        } else {
          $target = elem;
        }

        loading = true;
        $('body').animate({
          scrollTop: $target.offset().top
        }, 'fast', function () {
          elShare.hide();
          loading = false;
        });
      };

      var scrollTop = 0;
      var windowEl = angular.element($window);
      var handler = function handler() {
        if (loading) {
          return;
        }
        var ele = document.body;
        if (ele.scrollTop > 50 && scrollTop < ele.scrollTop) {
          showShare();
        } else {
          elShare.hide();
        }
        scrollTop = document.body.scrollTop;
      };
      windowEl.on('scroll', $scope.$apply.bind($scope, handler));
      handler();
    }
  };
}]);

export default angularjsBacktop;
