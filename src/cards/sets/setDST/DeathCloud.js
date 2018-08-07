"use strict";
const Constants = require ("../../../Constants");
const DeathCloudBase = require("../setMMA/DeathCloud");

class DeathCloud extends DeathCloudBase {
  constructor (game) {
    super(game, "Death Cloud", "Darksteel", "DST");
  }
}

module.exports = DeathCloud;
