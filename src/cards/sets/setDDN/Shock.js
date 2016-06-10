"use strict";
const Constants = require ("../../../Constants");
const ShockBase = require("../setBTD/Shock");

class Shock extends ShockBase {
  constructor (game) {
    super(game, "Shock", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = Shock;
