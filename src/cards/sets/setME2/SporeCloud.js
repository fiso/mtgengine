"use strict";
const Constants = require ("../../../Constants");
const SporeCloudBase = require("../setFEM/SporeCloud");

class SporeCloud extends SporeCloudBase {
  constructor (game) {
    super(game, "Spore Cloud", "Masters Edition II", "ME2");
  }
}

module.exports = SporeCloud;
