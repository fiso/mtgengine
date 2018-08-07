'use strict';
const Constants = require('../../../Constants');
const PhantasmalTerrainBase = require('../setME4/PhantasmalTerrain');

class PhantasmalTerrain extends PhantasmalTerrainBase {
  constructor (game) {
    super(game, 'Phantasmal Terrain', 'Unlimited Edition', '2ED');
  }
}

module.exports = PhantasmalTerrain;
