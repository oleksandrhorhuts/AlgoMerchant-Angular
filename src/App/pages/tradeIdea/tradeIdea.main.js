agmNgModuleWrapper('agmp.tradeIdea')
    .defineController('p.tradeIdea.MainController',['$scope'],
        function ($scope) {
            var vm = this;
            $scope.selectedFilter = '';
            $scope.selectedTab = 'technical';
            $scope.selectedAccordin ='basic';
            $scope.techBarValue1 ={'id':'4'};
            $scope.selectedPeriod ={};
            $scope.isprocessing = false;
            $scope.periodText = { buttonDefaultText: 'Choose Period'};
            $scope.loadingFilter=  function () {
                console.log("set processing True;")
                $scope.isprocessing = true;
            }
            $scope.changeTab=  function (tab,accordion) {
                console.log("Set Tab:",tab)
                console.log("Set Accordion:",accordion)
                $scope.selectedTab=tab;
                $scope.selectedAccordin = accordion;
            }
            $scope.changeTabAccordion=  function (tab,accordion) {
                console.log("Selected Accordion:",accordion)
                $scope.selectedAccordin = accordion;
            }
            $scope.setTabFilter=  function (filter) {
                console.log("set Filter is:",filter)
                $scope.selectedFilter = filter;
            }

            $scope.data = {
                Periods: [
                    { id: '1', name: 'Annual' },
                    { id: '2', name: 'Quartal' },
                ],
                periodTypes: [
                    { id: '1', name: 'Days' },
                    { id: '2', name: 'Week' },
                ],
                barPatternValue1: [
                    { id: '1', name: 'Open' },
                    { id: '2', name: 'High' },
                    { id: '3', name: 'Low' },
                    { id: '4', name: 'Close' },
                    { id: '5', name: 'Volume' },
                ],
            }

            $scope.dropdownSetting = {
                smartButtonMaxItems: 1,
                smartButtonTextConverter: function (itemText, originalItem) { return itemText; },
                selectionLimit: 1,
                showUncheckAll: false,
                closeOnSelect: true,
                scrollable: false,
                displayProp: 'name'
            };
        }) 