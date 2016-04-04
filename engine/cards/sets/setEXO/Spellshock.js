"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Spellshock extends Card {
  constructor(game) {
    super(game, "Spellshock", "Exodus", "EXO");
  }
}

module.exports = Spellshock;
