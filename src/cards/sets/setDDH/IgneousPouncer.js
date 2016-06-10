"use strict";
const Constants = require ("../../../Constants");
const IgneousPouncerBase = require("../setARB/IgneousPouncer");

class IgneousPouncer extends IgneousPouncerBase {
  constructor (game) {
    super(game, "Igneous Pouncer", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = IgneousPouncer;
