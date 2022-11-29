agmNgModuleWrapper('agmp.tradeIdea')
    .defineController('p.tradeIdea.MainController',['$scope'],
        function ($scope) {
            var vm = this;
            $scope.selectedFilter = '';
            $scope.selectedTab = 'technical';
            $scope.selectedAccordin ='';
            $scope.techBarValue1 ={'id':'4'};
            $scope.selectedPeriod ={};
            $scope.lookbackPeriod ={};
            $scope.diverStrategyType ={};
            $scope.diverStrategyType ={};
            $scope.MACDValue1 ={};
            $scope.selectedComparator ={};
            $scope.stochasticComparator ={};
            $scope.normalizedComparator ={};
            $scope.selectedbreakoutDirection ={};
            $scope.PeakThrough ={};
            $scope.lineBreakout ={};
            $scope.isElliotWave ={};
            $scope.isprocessing = false;
            $scope.selectedSector = [];
            $scope.SelectedText = { dynamicButtonTextSuffix:'Selected'}
            $scope.periodText = { buttonDefaultText: 'Choose Period'};
            $scope.StrategyTypeText = { buttonDefaultText: 'Choose Type'};
            $scope.StrategyIndicatorText = { buttonDefaultText: 'Choose Indicator'};
            $scope.MACDValue1Text = { buttonDefaultText: 'Choose Value'};
            $scope.comparatorText = { buttonDefaultText: 'Choose Comparator'};
            $scope.breakoutText = { buttonDefaultText: 'Choose Breakout Direction'};
            $scope.lineBreakoutText = { buttonDefaultText: 'Choose Line'};
            $scope.confirmationText = { buttonDefaultText: 'Yes/No'};
            $scope.loadingFilter=  function () {
                console.log("set processing True;")
                $scope.isprocessing = true;
            }
            $scope.changeTab=  function (tab) {
                console.log("Set Tab:",tab)
                $scope.selectedTab=tab;
            }
            $scope.changeTabAccordion=  function (accordion) {
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
                normalizedAccumulation: [
                    { id: '1', name: '0 Percentile' },
                    { id: '2', name: '5th Percentile' },
                    { id: '3', name: '10th Percentile' },
                    { id: '4', name: '15th Percentile' },
                    { id: '5', name: '20th Percentile' },
                ],
                diverStrategyType: [
                    { id: '1', name: 'Bullish' },
                    { id: '2', name: 'Bearish' },
                ],
                diverStrategyIndicator: [
                    { id: '1', name: 'Volume' },
                    { id: '2', name: 'RSI [N] days' },
                    { id: '3', name: 'Accumulation & Distribution'},
                ],
                lookbackPeriod: [
                    { id: '1', name: '3M' },
                    { id: '2', name: '6M' },
                    { id: '3', name: '12M'},
                    { id: '4', name: '2Y'},
                    { id: '5', name: '3Y'},
                ],
                MACDValue1: [
                    { id: '1', name: 'Turned Positive' },
                    { id: '2', name: 'Turned Negative' },
                    { id: '3', name: 'Positive'},
                    { id: '4', name: 'Negative'},
                ],
                Comparator: [
                    { id: '1', name: 'Greator' },
                    { id: '2', name: 'Smaller' },
                    { id: '3', name: 'Between' },
                    { id: '4', name: 'Cross Above'},
                    { id: '5', name: 'Cross Below'},
                ],
                breakoutDirection: [
                    { id: '1', name: 'Break Above' },
                    { id: '2', name: 'Break Below' },
                ],
                peakTrough: [
                    { id: '1', name: 'Peak' },
                    { id: '2', name: 'Trough' },
                ],
                lineBreakout: [
                    { id: '1', name: '23.6%' },
                    { id: '2', name: '38.2%' },
                    { id: '3', name: '61.8%' },
                    { id: '4', name: '78.6%'},
                ],
                confirmation: [
                    { id: '1', name: 'Yes' },
                    { id: '2', name: 'No' },
                ],
            }

            $scope.dropdownCheckbox = {
                showUncheckAll: false,
                showCheckAll: false,
                displayProp: 'name'
            };

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