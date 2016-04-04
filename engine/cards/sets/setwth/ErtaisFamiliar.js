"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ErtaisFamiliar extends Card {
  constructor(game) {
    super(game, "Ertai's Familiar", "Weatherlight", "WTH");
  }
}

module.exports = ErtaisFamiliar;
