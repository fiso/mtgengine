"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlchemistsApprentice extends Card {
  constructor(game) {
    super(game, "Alchemist's Apprentice", "Avacyn Restored", "AVR");
  }
}

module.exports = AlchemistsApprentice;
