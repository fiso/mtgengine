"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TerritorialRoc extends Card {
  constructor(game) {
    super(game, "Territorial Roc", "Dragons of Tarkir", "DTK");
  }
}

module.exports = TerritorialRoc;
