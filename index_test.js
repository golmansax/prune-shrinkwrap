var expect = require('chai').expect;
var path = require('path');
var fs = require('fs');
var jsonfile = require('jsonfile');
var pruneShrinkwrap = require('./').pruneShrinkwrap;

describe('.pruneShrinkwrap', function() {
  var shrinkwrapPath = path.resolve(__dirname, 'test-shrinkwrap.json');

  afterEach(function() {
    if (fs.existsSync(shrinkwrapPath)) {
      fs.unlinkSync(shrinkwrapPath);
    }
  });

  it('throws an error if shrinkwrap does not exist', function() {
    expect(function () {
      pruneShrinkwrap(shrinkwrapPath, []);
    }).to.throw(/no such file/);
  });

  it('throws an error if shrinkwrap is not proper json', function() {
    fs.writeFileSync(shrinkwrapPath, 'Hello, world!');
    expect(function () {
      pruneShrinkwrap(shrinkwrapPath, []);
    }).to.throw(/Unexpected token/);
  });

  it('removes only specified', function() {
    jsonfile.writeFileSync(shrinkwrapPath, {
      dependencies: {
        packageA: {},
        packageB: {},
        packageC: {},
        packageD: {},
      },
    });

    pruneShrinkwrap(shrinkwrapPath, ['packageA', 'packageC']);

    var updatedShrinkwrap = jsonfile.readFileSync(shrinkwrapPath);
    expect(updatedShrinkwrap).to.deep.equal({
      dependencies: {
        packageB: {},
        packageD: {},
      },
    });
  });
});
