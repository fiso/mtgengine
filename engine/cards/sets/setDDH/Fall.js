"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FallBase = require("../setDIS/Fall.js");

class Fall extends FallBase {
  constructor(game) {
    super(game, "Fall", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Fall;
