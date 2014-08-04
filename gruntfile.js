module.exports= function(grunt){
    // load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    
    
    // first grunt task when run
    grunt.initConfig({
          
        // TASK 1: setup compass  
        compass:{
            dev:{
                options:{
                    config:'config.rb'  // tell compass task where to find the config file
                }//options
            }//dev
        },//compass




        // TASK 2: minify
        uglify:{
            my_target:{
                files:{
                    'js/main.js': ['components/js/*.js']
                }//files
            }//my_target
        },//uglify  
        
        
        
        // TASK 3: watch for changes
        watch:{
            
            //options: {livereload:true}, // reload browser on save

            scripts: { 
                files:['components/js/*.js'], // files to watch
                tasks:['uglify']    // task to run on change
            },//scripts

            html: { 
                files:['*.html'], // files to watch
            },//html

            sass:{
                files:['components/sass/*.scss'],
                tasks:['compass:dev'] // run dev task in compass task
            }//sass

        }//watch
        
    })//initConfig
    
    // create default task when just typing 'grunt'
    grunt.registerTask('default', 'watch');
    
}//exports