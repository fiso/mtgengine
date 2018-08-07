"use strict";
const Constants = require ("../../../Constants");
const SigiledStarfishBase = require("../setC18/SigiledStarfish");

class SigiledStarfish extends SigiledStarfishBase {
  constructor (game) {
    super(game, "Sigiled Starfish", "Journey into Nyx", "JOU");
  }
}

module.exports = SigiledStarfish;
