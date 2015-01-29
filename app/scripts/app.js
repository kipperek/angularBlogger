'use strict';

angular.module('spBlogger', ['ui.router','spBlogger.posts'])
  .run(function($state){
    $state.go('allPosts');
  });

