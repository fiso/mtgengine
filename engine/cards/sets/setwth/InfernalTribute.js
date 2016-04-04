"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InfernalTribute extends Card {
  constructor(game) {
    super(game, "Infernal Tribute", "Weatherlight", "WTH");
  }
}

module.exports = InfernalTribute;
