'use strict';
const Constants = require('../../../Constants');
const DragonEngineBase = require('../setME4/DragonEngine');

class DragonEngine extends DragonEngineBase {
  constructor (game) {
    super(game, 'Dragon Engine', 'Fourth Edition', '4ED');
  }
}

module.exports = DragonEngine;
