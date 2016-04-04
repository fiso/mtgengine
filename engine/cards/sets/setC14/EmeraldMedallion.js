"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmeraldMedallion extends Card {
  constructor(game) {
    super(game, "Emerald Medallion", "Commander 2014", "C14");
  }
}

module.exports = EmeraldMedallion;
