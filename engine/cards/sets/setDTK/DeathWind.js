"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathWindBase = require("../setAVR/DeathWind.js");

class DeathWind extends DeathWindBase {
  constructor(game) {
    super(game, "Death Wind", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DeathWind;
