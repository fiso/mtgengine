"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeaconBehemoth extends UnimplementedCard {
  constructor(game) {
    super(game, "Beacon Behemoth", "Conflux", "CON");
  }
}

module.exports = BeaconBehemoth;
