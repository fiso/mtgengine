"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThermalBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Thermal Blast", "Odyssey", "ODY");
  }
}

module.exports = ThermalBlast;
