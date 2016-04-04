"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MagusoftheArenaBase = require("../setC13/MagusoftheArena.js");

class MagusoftheArena extends MagusoftheArenaBase {
  constructor(game) {
    super(game, "Magus of the Arena", "Planar Chaos", "PLC");
  }
}

module.exports = MagusoftheArena;
