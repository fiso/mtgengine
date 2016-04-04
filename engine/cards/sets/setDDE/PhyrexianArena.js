"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianArenaBase = require("../setAPC/PhyrexianArena.js");

class PhyrexianArena extends PhyrexianArenaBase {
  constructor(game) {
    super(game, "Phyrexian Arena", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianArena;
