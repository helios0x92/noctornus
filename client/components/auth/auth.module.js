'use strict';

angular.module('nocturnusApp.auth', [
  'nocturnusApp.constants',
  'nocturnusApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
