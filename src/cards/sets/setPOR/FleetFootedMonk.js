"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FleetFootedMonk extends UnimplementedCard {
  constructor(game) {
    super(game, "Fleet-Footed Monk", "Portal", "POR");
  }
}

module.exports = FleetFootedMonk;
