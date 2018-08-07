"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IrrigatedFarmland extends UnimplementedCard {
  constructor (game) {
    super(game, "Irrigated Farmland", "Amonkhet", "AKH");
  }
}

module.exports = IrrigatedFarmland;
