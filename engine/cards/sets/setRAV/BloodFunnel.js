"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodFunnel extends UnimplementedCard {
  constructor(game) {
    super(game, "Blood Funnel", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BloodFunnel;
