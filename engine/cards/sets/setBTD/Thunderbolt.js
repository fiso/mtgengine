"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThunderboltBase = require("../setAVR/Thunderbolt.js");

class Thunderbolt extends ThunderboltBase {
  constructor(game) {
    super(game, "Thunderbolt", "Beatdown Box Set", "BTD");
  }
}

module.exports = Thunderbolt;
