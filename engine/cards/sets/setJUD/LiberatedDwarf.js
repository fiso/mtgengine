"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LiberatedDwarf extends Card {
  constructor(game) {
    super(game, "Liberated Dwarf", "Judgment", "JUD");
  }
}

module.exports = LiberatedDwarf;
