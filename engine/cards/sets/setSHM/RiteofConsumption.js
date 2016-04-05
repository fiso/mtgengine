"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiteofConsumption extends UnimplementedCard {
  constructor(game) {
    super(game, "Rite of Consumption", "Shadowmoor", "SHM");
  }
}

module.exports = RiteofConsumption;
