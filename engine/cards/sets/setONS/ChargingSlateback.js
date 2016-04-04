"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChargingSlateback extends Card {
  constructor(game) {
    super(game, "Charging Slateback", "Onslaught", "ONS");
  }
}

module.exports = ChargingSlateback;
