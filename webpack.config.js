const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'kc_kvadraid_front',

  exposes: {
    'kc_kvadraid_front': './src/app/modules/kvadra-id/kvadra-id.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
