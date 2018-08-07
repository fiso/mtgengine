"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarCadence extends UnimplementedCard {
  constructor (game) {
    super(game, "War Cadence", "Commander 2013", "C13");
  }
}

module.exports = WarCadence;
