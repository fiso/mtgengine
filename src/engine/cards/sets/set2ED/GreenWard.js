'use strict';
const Constants = require('../../../Constants');
const GreenWardBase = require('../set4ED/GreenWard');

class GreenWard extends GreenWardBase {
  constructor (game) {
    super(game, 'Green Ward', 'Unlimited Edition', '2ED');
  }
}

module.exports = GreenWard;
