"use strict";
const Constants = require ("../../../Constants");
const MarisisTwinclawsBase = require("../setARB/MarisisTwinclaws");

class MarisisTwinclaws extends MarisisTwinclawsBase {
  constructor(game) {
    super(game, "Marisi's Twinclaws", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = MarisisTwinclaws;
