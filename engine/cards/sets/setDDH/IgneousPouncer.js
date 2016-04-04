"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IgneousPouncerBase = require("../setARB/IgneousPouncer.js");

class IgneousPouncer extends IgneousPouncerBase {
  constructor(game) {
    super(game, "Igneous Pouncer", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = IgneousPouncer;
