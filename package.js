Package.describe({
  name: 'gwendall:tapi18n-react',
  summary: 'React component for TAPi18n',
  git: 'https://github.com/gwendall/meteor-tapi18n-react.git',
  version: '0.1.2'
});

Package.onUse(function(api, where) {
  api.versionsFrom('1.2');
  api.use([
    'react@0.1.13',
    'tap:i18n@1.7.0'
  ]);
  api.addFiles('lib.jsx');
  api.export('TAP');
});
