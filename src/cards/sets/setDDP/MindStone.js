"use strict";
const Constants = require ("../../../Constants");
const MindStoneBase = require("../setC14/MindStone");

class MindStone extends MindStoneBase {
  constructor (game) {
    super(game, "Mind Stone", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = MindStone;
