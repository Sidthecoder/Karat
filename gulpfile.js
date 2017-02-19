    var gulp = require('gulp');
    var cleanCSS = require('gulp-clean-css');
    var pkg = require('./package.json');
    var comment = '\/*\r\n* Karat ' + pkg.version + '\r\n* Copyright 2017, Sid Hegde\r\n* http:\/\/karat.gq\/\r\n* Free to use under the MIT license.\r\n* https:\/\/github.com\/Sidthecoder\/Karat\/LICENSE\r\n*\/\r\n';
    var $ = require('gulp-load-plugins')();    
