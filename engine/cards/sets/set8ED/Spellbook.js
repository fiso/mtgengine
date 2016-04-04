"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Spellbook extends Card {
  constructor(game) {
    super(game, "Spellbook", "Eighth Edition", "8ED");
  }
}

module.exports = Spellbook;
