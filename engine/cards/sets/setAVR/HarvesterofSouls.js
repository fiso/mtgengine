"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarvesterofSouls extends UnimplementedCard {
  constructor(game) {
    super(game, "Harvester of Souls", "Avacyn Restored", "AVR");
  }
}

module.exports = HarvesterofSouls;
