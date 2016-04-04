"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ButchersGlee extends Card {
  constructor(game) {
    super(game, "Butcher's Glee", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ButchersGlee;
