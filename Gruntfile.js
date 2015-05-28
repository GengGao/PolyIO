module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-vulcanize');

  grunt.initConfig({
    vulcanize: {
        default: {
          options: {
            csp: true,
          },
          files: {
            'build-csp.html': 'index.html'
          },
        },
      },
  })

  // Default task(s).
  grunt.registerTask('default', ['vulcanize']);

};
