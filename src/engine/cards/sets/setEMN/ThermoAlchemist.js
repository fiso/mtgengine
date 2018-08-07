"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThermoAlchemist extends UnimplementedCard {
  constructor (game) {
    super(game, "Thermo-Alchemist", "Eldritch Moon", "EMN");
  }
}

module.exports = ThermoAlchemist;
