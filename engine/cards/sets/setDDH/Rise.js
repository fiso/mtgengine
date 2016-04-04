"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RiseBase = require("../setDIS/Rise.js");

class Rise extends RiseBase {
  constructor(game) {
    super(game, "Rise", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Rise;
