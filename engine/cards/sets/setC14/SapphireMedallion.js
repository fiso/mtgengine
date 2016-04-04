"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SapphireMedallion extends Card {
  constructor(game) {
    super(game, "Sapphire Medallion", "Commander 2014", "C14");
  }
}

module.exports = SapphireMedallion;
