"use strict";
const Constants = require ("../../../Constants");
const PhyrexianArenaBase = require("../setAPC/PhyrexianArena");

class PhyrexianArena extends PhyrexianArenaBase {
  constructor (game) {
    super(game, "Phyrexian Arena", "Eighth Edition", "8ED");
  }
}

module.exports = PhyrexianArena;
