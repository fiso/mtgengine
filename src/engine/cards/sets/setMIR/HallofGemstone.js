"use strict";
const Constants = require ("../../../Constants");
const HallofGemstoneBase = require("../setWC98/HallofGemstone");

class HallofGemstone extends HallofGemstoneBase {
  constructor (game) {
    super(game, "Hall of Gemstone", "Mirage", "MIR");
  }
}

module.exports = HallofGemstone;
