"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GeothermalCrevice extends UnimplementedCard {
  constructor(game) {
    super(game, "Geothermal Crevice", "Invasion", "INV");
  }
}

module.exports = GeothermalCrevice;
