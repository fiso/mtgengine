"use strict";
const Constants = require ("../../../Constants");
const SpinyStarfishBase = require("../setALL/SpinyStarfish");

class SpinyStarfish extends SpinyStarfishBase {
  constructor (game) {
    super(game, "Spiny Starfish", "Masters Edition III", "ME3");
  }
}

module.exports = SpinyStarfish;
