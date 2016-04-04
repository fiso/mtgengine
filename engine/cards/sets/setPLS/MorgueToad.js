"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MorgueToadBase = require("../setDDH/MorgueToad.js");

class MorgueToad extends MorgueToadBase {
  constructor(game) {
    super(game, "Morgue Toad", "Planeshift", "PLS");
  }
}

module.exports = MorgueToad;
