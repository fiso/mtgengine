"use strict";
const Constants = require ("../../../Constants");
const IrrigatedFarmlandBase = require("../setAKH/IrrigatedFarmland");

class IrrigatedFarmland extends IrrigatedFarmlandBase {
  constructor (game) {
    super(game, "Irrigated Farmland", "Amonkhet Promos", "PAKH");
  }
}

module.exports = IrrigatedFarmland;
