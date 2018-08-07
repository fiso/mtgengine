"use strict";
const Constants = require ("../../../Constants");
const PhyrexianArenaBase = require("../setCN2/PhyrexianArena");

class PhyrexianArena extends PhyrexianArenaBase {
  constructor (game) {
    super(game, "Phyrexian Arena", "Planechase", "HOP");
  }
}

module.exports = PhyrexianArena;
