"use strict";
const Constants = require ("../../../Constants");
const MindStoneBase = require("../setC18/MindStone");

class MindStone extends MindStoneBase {
  constructor (game) {
    super(game, "Mind Stone", "World Championship Decks 1997", "WC97");
  }
}

module.exports = MindStone;
