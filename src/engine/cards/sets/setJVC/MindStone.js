"use strict";
const Constants = require ("../../../Constants");
const MindStoneBase = require("../setC18/MindStone");

class MindStone extends MindStoneBase {
  constructor (game) {
    super(game, "Mind Stone", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = MindStone;
