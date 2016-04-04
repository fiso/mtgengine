"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CountersquallBase = require("../setCON/Countersquall.js");

class Countersquall extends CountersquallBase {
  constructor(game) {
    super(game, "Countersquall", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Countersquall;
