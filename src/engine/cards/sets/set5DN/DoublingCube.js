'use strict';
const Constants = require('../../../Constants');
const DoublingCubeBase = require('../set10E/DoublingCube');

class DoublingCube extends DoublingCubeBase {
  constructor (game) {
    super(game, 'Doubling Cube', 'Fifth Dawn', '5DN');
  }
}

module.exports = DoublingCube;
