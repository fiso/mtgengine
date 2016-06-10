"use strict";
const Constants = require ("../../../Constants");
const DeathCloudBase = require("../setDST/DeathCloud");

class DeathCloud extends DeathCloudBase {
  constructor (game) {
    super(game, "Death Cloud", "Modern Masters", "MMA");
  }
}

module.exports = DeathCloud;
