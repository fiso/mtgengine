"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SigiledStarfishBase = require("../setJOU/SigiledStarfish.js");

class SigiledStarfish extends SigiledStarfishBase {
  constructor(game) {
    super(game, "Sigiled Starfish", "Magic Origins", "ORI");
  }
}

module.exports = SigiledStarfish;
