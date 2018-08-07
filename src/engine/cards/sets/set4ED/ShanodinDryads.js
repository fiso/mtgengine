'use strict';
const Constants = require('../../../Constants');
const ShanodinDryadsBase = require('../set7ED/ShanodinDryads');

class ShanodinDryads extends ShanodinDryadsBase {
  constructor (game) {
    super(game, 'Shanodin Dryads', 'Fourth Edition', '4ED');
  }
}

module.exports = ShanodinDryads;
