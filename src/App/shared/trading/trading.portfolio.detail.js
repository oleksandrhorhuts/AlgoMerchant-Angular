﻿agmNgModuleWrapper('agms.orders')
    .defineControllerAsPopup('s.trading.PortfolioDetailPopupController', {
            templateUrl: '/App/shared/trading/trading.portfolio.detail.html',
            windowClass: 'full-size-modal'
        }, ['position', 'orders'],
        function(vm, dep, tool) {
            var position = dep.position,
                orders = dep.orders;
            vm.getItem = getItem;
            vm.orders = orders;
            vm.position = position;
            vm.showPagination = showPagination;
            vm.getPagedFilledOrders = getPagedFilledOrders;

            vm.models = {
                currentPage: 1,
                numPages: 1
            };

            var ordersPerPage = 10;

            function getPagedFilledOrders() {
                return _.take(_.drop(_.sortBy(orders, ['UpdateTime']).reverse(), (vm.models.currentPage - 1) * ordersPerPage), ordersPerPage);
            }

            function showPagination() {
                return vm.models.numPages > 1;
            }

            function getItem() {
                vm.orders.forEach(function(order) {
                    order.Product = position.Product;
                    order.ProductId = position.ProductId;
                });
                return [vm.position];
            }

        }
    );
