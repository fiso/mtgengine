"use strict";
const Constants = require ("../../../Constants");
const MorgueToadBase = require("../setDDH/MorgueToad");

class MorgueToad extends MorgueToadBase {
  constructor (game) {
    super(game, "Morgue Toad", "Planeshift", "PLS");
  }
}

module.exports = MorgueToad;
