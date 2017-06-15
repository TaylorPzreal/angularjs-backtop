// import angular from 'angular';
// import $ from 'jquery';

export default angular
  .module('AngularjsBackTop', [])
  .directive('angularjsBackTop', [
    '$window',
    '$document',
    '$compile',
    function ($window, $document, $compile) {
      return {
        restrict: 'EA',
        link(scope, elem, attr) {
          const $scope = scope;
          const elShare = angular.element(
            '<a title="返回顶部" ng-click="backTop()" class="angularjs-backtop"><i></i></a>'
          );
          // const elShare = $(
          //   '<a title="返回顶部" ng-click="backTop()" class="angularjs-backtop"><i></i></a>'
          // );

          function showShare() {
            if (!elShare.hasClass('ng-scope')) {
              $compile(elShare)($scope);
              const body = $document.find('body').eq(0);
              body.append(elShare);
            }
            elShare.show();
          }

          let loading = false;

          $scope.backTop = function () {
            const idToScroll = attr.href;
            let $target;

            if (idToScroll) {
              $target = $(idToScroll);
            } else {
              $target = elem;
            }

            loading = true;
            $('body').animate(
              {
                scrollTop: $target.offset().top,
              },
              'fast',
              () => {
                elShare.hide();
                loading = false;
              }
            );
          };

          let scrollTop = 0;
          const windowEl = angular.element($window);
          const handler = function () {
            if (loading) {
              return;
            }
            const ele = document.body;
            if (ele.scrollTop > 50 && scrollTop < ele.scrollTop) {
              showShare();
            } else {
              elShare.hide();
            }
            scrollTop = document.body.scrollTop;
          };
          windowEl.on('scroll', $scope.$apply.bind($scope, handler));
          handler();
        },
      };
    },
  ]);
