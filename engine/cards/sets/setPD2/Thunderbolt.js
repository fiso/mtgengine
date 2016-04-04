"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThunderboltBase = require("../setAVR/Thunderbolt.js");

class Thunderbolt extends ThunderboltBase {
  constructor(game) {
    super(game, "Thunderbolt", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = Thunderbolt;
