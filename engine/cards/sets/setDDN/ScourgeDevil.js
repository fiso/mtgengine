"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScourgeDevilBase = require("../setDDK/ScourgeDevil.js");

class ScourgeDevil extends ScourgeDevilBase {
  constructor(game) {
    super(game, "Scourge Devil", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = ScourgeDevil;
