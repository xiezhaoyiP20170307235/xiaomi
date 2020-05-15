let gulp = require("gulp")
let sass = require("gulp-sass") //sass转css

// 复制html
gulp.task("watch-all",async()=>{
    // 复制html 
    gulp.watch("./src/*.html",async()=>{
        gulp.src("./src/*.html")
        .pipe(gulp.dest("d:\\nz\\phpStudy\\WWW\\xiaomi\\src"))
    })

    // 复制php 
    gulp.watch("./php/*.php",async()=>{
        gulp.src("./php/*.php")
        .pipe(gulp.dest("d:\\nz\\phpStudy\\WWW\\xiaomi\\php"))
    })

    // 复制css
    gulp.watch("./css/**/*",async()=>{
        gulp.src("./css/**.*")
        .pipe(sass())  //scss转css
        .pipe(gulp.dest("d:\\nz\\phpStudy\\WWW\\xiaomi\\css"))
    })

     // 复制js
     gulp.watch("./js/*.js",async()=>{
        gulp.src("./js/*.js")
        .pipe(gulp.dest("d:\\nz\\phpStudy\\WWW\\xiaomi\\js"))
    })

     // 复制img
     gulp.watch("./img/**/*",async()=>{
        gulp.src("./img/**/*")
        .pipe(gulp.dest("d:\\nz\\phpStudy\\WWW\\xiaomi\\img"))
    })

    // 复制icon
    gulp.watch("./icon/**/*",async()=>{
        gulp.src("./icon/**/*")
        .pipe(gulp.dest("d:\\nz\\phpStudy\\WWW\\xiaomi\\icon"))
    })
})
