"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GeothermalCrevice extends Card {
  constructor(game) {
    super(game, "Geothermal Crevice", "Invasion", "INV");
  }
}

module.exports = GeothermalCrevice;
