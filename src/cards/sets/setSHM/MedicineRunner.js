"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MedicineRunner extends UnimplementedCard {
  constructor(game) {
    super(game, "Medicine Runner", "Shadowmoor", "SHM");
  }
}

module.exports = MedicineRunner;
