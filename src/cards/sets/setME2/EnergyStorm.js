"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnergyStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Energy Storm", "Masters Edition II", "ME2");
  }
}

module.exports = EnergyStorm;
