"use strict";
const Constants = require ("../../../Constants");
const SporeCloudBase = require("../setME2/SporeCloud");

class SporeCloud extends SporeCloudBase {
  constructor (game) {
    super(game, "Spore Cloud", "Fallen Empires", "FEM");
  }
}

module.exports = SporeCloud;
