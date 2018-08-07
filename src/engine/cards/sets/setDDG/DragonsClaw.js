"use strict";
const Constants = require ("../../../Constants");
const DragonsClawBase = require("../setM12/DragonsClaw");

class DragonsClaw extends DragonsClawBase {
  constructor (game) {
    super(game, "Dragon's Claw", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = DragonsClaw;
