"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DimirAqueduct extends Card {
  constructor(game) {
    super(game, "Dimir Aqueduct", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DimirAqueduct;
