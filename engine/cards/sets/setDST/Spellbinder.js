"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Spellbinder extends Card {
  constructor(game) {
    super(game, "Spellbinder", "Darksteel", "DST");
  }
}

module.exports = Spellbinder;
