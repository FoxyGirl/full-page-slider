"use strict";

var gulp = require("gulp"),
    less = require("gulp-less"),
    plumber = require("gulp-plumber"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    mqpacker = require("css-mqpacker"),
    minify = require("gulp-csso"),
    rename = require("gulp-rename"),
    server = require("browser-sync").create();

gulp.task("style", function() {
    gulp.src("less/styles.less")
        .pipe(plumber())
        .pipe(less())
        .pipe(postcss([
            autoprefixer({browsers: [
                "last 1 version",
                "last 2 Chrome versions",
                "last 2 Firefox versions",
                "last 2 Opera versions",
                "last 2 Edge versions"
            ]}),
            mqpacker({
                sort: true
            })
        ]))
        .pipe(gulp.dest("css/"))
        .pipe(minify())
        .pipe(rename("styles.min.css"))
        .pipe(gulp.dest("css/"))
        .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
    server.init({
        server: "./",
        notify: false,
        open: true,
        ui: false
    });

    //gulp.watch("css/*.css", ["style"]);
    gulp.watch("less/**/*.less", ["style"]);
    gulp.watch("*.html").on("change", server.reload);
    gulp.watch("js/*.js").on("change", server.reload);
});