"use strict";
const Constants = require ("../../../Constants");
const ThunderboltBase = require("../setAVR/Thunderbolt");

class Thunderbolt extends ThunderboltBase {
  constructor(game) {
    super(game, "Thunderbolt", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = Thunderbolt;
