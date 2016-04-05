"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrashingMudspawn extends UnimplementedCard {
  constructor(game) {
    super(game, "Thrashing Mudspawn", "Onslaught", "ONS");
  }
}

module.exports = ThrashingMudspawn;
