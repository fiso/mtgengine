"use strict";
const Constants = require ("../../../Constants");
const JeskaiElderBase = require("../setKTK/JeskaiElder");

class JeskaiElder extends JeskaiElderBase {
  constructor (game) {
    super(game, "Jeskai Elder", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = JeskaiElder;
