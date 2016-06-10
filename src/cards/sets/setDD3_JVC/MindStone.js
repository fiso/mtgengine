"use strict";
const Constants = require ("../../../Constants");
const MindStoneBase = require("../setC14/MindStone");

class MindStone extends MindStoneBase {
  constructor (game) {
    super(game, "Mind Stone", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = MindStone;
