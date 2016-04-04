"use strict";
const Constants = require ("../../../Constants");
const PreordainBase = require("../setC15/Preordain");

class Preordain extends PreordainBase {
  constructor(game) {
    super(game, "Preordain", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = Preordain;
