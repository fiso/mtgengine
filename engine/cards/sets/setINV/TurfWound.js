"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TurfWound extends UnimplementedCard {
  constructor(game) {
    super(game, "Turf Wound", "Invasion", "INV");
  }
}

module.exports = TurfWound;
