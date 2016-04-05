"use strict";
const Constants = require ("../../../Constants");
const JawsofStoneBase = require("../setDDG/JawsofStone");

class JawsofStone extends JawsofStoneBase {
  constructor(game) {
    super(game, "Jaws of Stone", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = JawsofStone;
