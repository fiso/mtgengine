"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StalkingVengeanceBase = require("../setC13/StalkingVengeance.js");

class StalkingVengeance extends StalkingVengeanceBase {
  constructor(game) {
    super(game, "Stalking Vengeance", "Dissension", "DIS");
  }
}

module.exports = StalkingVengeance;
