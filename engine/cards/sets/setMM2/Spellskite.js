"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Spellskite extends Card {
  constructor(game) {
    super(game, "Spellskite", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Spellskite;
