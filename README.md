Step 1: Install the package
           Install react-native-reanimated package from npm:
           npm install react-native-reanimated
Step 2: Add Reanimated's babel plugin
             Add react-native-reanimated/plugin plugin to your babel.config.js.
             module.exports = { 
                               presets: [],
         plugins: ['react-native-reanimated/plugin'],  // only add this line
  };
