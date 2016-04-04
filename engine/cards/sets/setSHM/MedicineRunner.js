"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MedicineRunner extends Card {
  constructor(game) {
    super(game, "Medicine Runner", "Shadowmoor", "SHM");
  }
}

module.exports = MedicineRunner;
