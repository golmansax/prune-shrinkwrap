var jsonfile = require('jsonfile');

var pruneShrinkwrap = function (shrinkwrapPath, packagesToRemove) {
  var shrinkwrap = jsonfile.readFileSync(shrinkwrapPath);

  packagesToRemove.forEach(function (packageToRemove) {
    if (shrinkwrap.dependencies[packageToRemove]) {
      delete shrinkwrap.dependencies[packageToRemove];
    }
  });

  jsonfile.writeFileSync(shrinkwrapPath, shrinkwrap, {
    spaces: 2,
  });
};

module.exports = {
  pruneShrinkwrap: pruneShrinkwrap,
};
