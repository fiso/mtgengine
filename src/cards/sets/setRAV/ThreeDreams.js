"use strict";
const Constants = require ("../../../Constants");
const ThreeDreamsBase = require("../setPCA/ThreeDreams");

class ThreeDreams extends ThreeDreamsBase {
  constructor (game) {
    super(game, "Three Dreams", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ThreeDreams;
