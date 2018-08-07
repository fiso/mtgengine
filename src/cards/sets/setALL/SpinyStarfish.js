"use strict";
const Constants = require ("../../../Constants");
const SpinyStarfishBase = require("../setME3/SpinyStarfish");

class SpinyStarfish extends SpinyStarfishBase {
  constructor (game) {
    super(game, "Spiny Starfish", "Alliances", "ALL");
  }
}

module.exports = SpinyStarfish;
