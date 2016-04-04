"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoryosVengeance extends Card {
  constructor(game) {
    super(game, "Goryo's Vengeance", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = GoryosVengeance;
