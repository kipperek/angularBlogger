'use strict';

angular.module('spBlogger.posts',['ui.router','spBlogger.posts.controllers'])
  .config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise("/posts");
    $stateProvider.state('allPosts',{
      url:'/posts',
      templateUrl: 'modules/posts/views/posts.html',
      controller: 'PostController'
    });
    $stateProvider.state('singlePost',{
      url:'/posts/:id/:permalink',
      templateUrl: 'modules/posts/views/singlePost.html',
      controller: 'PostDetailsController'
    });

  });
