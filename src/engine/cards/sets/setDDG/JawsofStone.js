"use strict";
const Constants = require ("../../../Constants");
const JawsofStoneBase = require("../setDDI/JawsofStone");

class JawsofStone extends JawsofStoneBase {
  constructor (game) {
    super(game, "Jaws of Stone", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = JawsofStone;
