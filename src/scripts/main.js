// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  classes = require('bespoke-classes'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress');
  state = require('bespoke-state');

// Bespoke.js
bespoke.from('article', [
  classes(),
  keys(),
  touch(),
  bullets('.bullet'),
  backdrop(),
  scale(),
  hash(),
  progress(),
  state()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');
require('prism/components/prism-git')
require('prism/components/prism-bash')

document.addEventListener('keydown', function(e) {
  if (e.which == 75) {
    var secret = document.getElementById('secret');
    if (secret.style.opacity == 1)
        secret.style.opacity = 0;
    else
        secret.style.opacity = 1;
  }
});
