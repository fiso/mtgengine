"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThermalBlast extends Card {
  constructor(game) {
    super(game, "Thermal Blast", "Odyssey", "ODY");
  }
}

module.exports = ThermalBlast;
