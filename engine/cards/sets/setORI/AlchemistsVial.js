"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlchemistsVial extends Card {
  constructor(game) {
    super(game, "Alchemist's Vial", "Magic Origins", "ORI");
  }
}

module.exports = AlchemistsVial;
