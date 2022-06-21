﻿agmNgModuleWrapper('agms.product')
    .defineService('sProductService', [], function (serviceObj, dep, tool) {
        var marketInfoPath = '/marketinfoapi/v1/ProductDetail';
        var marketInfoTickPath = '/marketinfoapi/v1/TickSize';
        var productPath = '/productapi/v1/Product';

        var $window = dep.$window,
            coreConfigService = dep.coreConfigService,
            coreServerCommunicationService = dep.coreServerCommunicationService;
        
        function createProductPageUrl(selectedProduct) {
            if (coreConfigService.General.ShowProductPage && selectedProduct.TradeVenueLoc) {
                return "/Home/Inside#/product-detail/" + selectedProduct.TradeVenueLoc + "/" + selectedProduct.Symbol;
            } else {
                if (selectedProduct.Sector.SectorName === "Warrants") {
                    return (createYahooFinanceUrl(selectedProduct));
                } else {
                    return (createGoogleFinanceUrl(selectedProduct));
                }
            }
        }
        
        function goToProduct(selectedProduct) {
            if (selectedProduct.Symbol != null) {
                //$window.open("//www.reuters.com/finance/stocks/overview?symbol=" + selectedProduct.Symbol);
                //$location.path('/product/' + selectedProduct.ProductId);
                $window.open(createProductPageUrl(selectedProduct));
            } else if (selectedProduct !== "") {
                //$location.path('/product' + selectedProduct.ProductId);
                //$window.open("//www.reuters.com/finance/stocks/overview?symbol=" + selectedProduct);
                //$window.open("/Home/Inside#/product/" + selectedProduct);
            }
        };
        
        function translateTradeVenue(tradeVenueLoc) {
            switch (tradeVenueLoc) {
                case 'SG':
                    return 'SGX:';
                case 'UK':
                    return 'LON:';
                case 'AU':
                    return 'ASX:';
                default:
                    return '';
            }
        }

        function createGoogleFinanceUrl(product) {
            return "//www.google.com/finance?q=" + translateTradeVenue(product.TradeVenueLoc) + product.Symbol;
        }

        function createYahooFinanceUrl(product) {
            return "//sg.finance.yahoo.com/q?s=" + product.Symbol + "&ql=1";
        }

        function updateProductTickSizeValueIfBelongToGroup(product) {
            var productId = product.ProductId || product.ProductModel.ProductId;
            serviceObj.GetProductTickSizeValueIfBelongToGroup(productId)
                .then(function (res) {
                    product.ProductTickSizeValueIfBelongToGroup = res.data;
                });
        }
        
        tool.setServiceObjectProperties({
            createProductPageUrl: createProductPageUrl,
            goToProduct: goToProduct,            
            updateProductTickSizeValueIfBelongToGroup: updateProductTickSizeValueIfBelongToGroup,

            GetProductDetail: coreServerCommunicationService.genGetFunctionWithNVar(marketInfoPath + '/GetProductDetail', function (args) {
                return {
                    productId: args[0]
                };
            }),
            GetProductTickSizeValueIfBelongToGroup: coreServerCommunicationService.genGetFunctionWithNVar(marketInfoTickPath + '/GetProductTickSizeValueIfBelongToGroup', function (args) {
                return {
                    productId: args[0]
                };
            }),

            // TODO MaRa: duplicate path in ProductMs, need to deploy that one first
            GetGlobalIndicesBySymbols: coreServerCommunicationService.genPostFunction(productPath + '/GetGlobalIndicesBySymbols'),
            GetProductsByCategory: coreServerCommunicationService.genGetFunctionWithNVar(productPath + '/GetProductsByCategory', function (args) {
                return {
                    categoryName: args[0]
                };
            }),
            IsProductTradeableForBroker: coreServerCommunicationService.genGetFunctionWithNVar(productPath + '/IsProductTradeableForBroker', function (args) {
                return {
                    productId: args[0],
                    brokerageType: args[1]
                };
            }),
            GetProductLeverageAndMultiplier: coreServerCommunicationService.genGetFunctionWithNVar(productPath + '/GetProductLeverageAndMultiplier', function (args) {
                return {
                    productId: args[0],
                    brokerageType: args[1]
                };
            }),
            GetBenchmarkProducts: coreServerCommunicationService.genGetFunctionWithNVar(productPath + '/GetBenchmarkProducts'),
            GetProductBySymbolAndVenue: coreServerCommunicationService.genGetFunctionWithNVar(productPath + '/GetProductBySymbolAndVenue', function (args) {
                return {
                    tradeVenue: args[0],
                    symbol: args[1],
                    allowIndices: args[2]
                };
            }),
            GetProduct: coreServerCommunicationService.genGetFunctionWithNVar(productPath + '/GetProduct', function (args) {
                return {
                    productId: args[0]
                };
            }),
            
            SearchProductByMarket: coreServerCommunicationService.genGetFunctionWithNVar(productPath + '/SearchProductByMarket', function (args) {
                return {
                    keyword: args[0],
                    market: args[1],
                    take: args[2],
                    activeOnly: args[3]
                };
            }),
            SearchPlottableProduct: coreServerCommunicationService.genGetFunctionWithNVar(productPath + '/SearchPlottableProduct', function (args) {
                return {
                    keyword: args[0],
                    take: args[1]
                };
            }),
            SearchProduct: coreServerCommunicationService.genGetFunctionWithNVar(productPath + '/SearchProduct', function (args) {
                return {
                    keyword: args[0],
                    take: args[1],
                    activeOnly: args[2]
                };
            }),
            SearchProductForWatchlist: coreServerCommunicationService.genGetFunctionWithNVar(productPath + '/SearchProductForWatchlist', function (args) {
                return {
                    keyword: args[0],
                    take: args[1]
                };
            }),            
            GetProductsLeverage: coreServerCommunicationService.genPostFunction(productPath + '/GetProductsLeverage')
        });
    });
