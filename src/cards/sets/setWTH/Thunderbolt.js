"use strict";
const Constants = require ("../../../Constants");
const ThunderboltBase = require("../setAVR/Thunderbolt");

class Thunderbolt extends ThunderboltBase {
  constructor (game) {
    super(game, "Thunderbolt", "Weatherlight", "WTH");
  }
}

module.exports = Thunderbolt;
