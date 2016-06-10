"use strict";
const Constants = require ("../../../Constants");
const SigiledStarfishBase = require("../setJOU/SigiledStarfish");

class SigiledStarfish extends SigiledStarfishBase {
  constructor (game) {
    super(game, "Sigiled Starfish", "Magic Origins", "ORI");
  }
}

module.exports = SigiledStarfish;
