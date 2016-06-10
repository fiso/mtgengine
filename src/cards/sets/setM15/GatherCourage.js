"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GatherCourage extends UnimplementedCard {
  constructor (game) {
    super(game, "Gather Courage", "Magic 2015 Core Set", "M15");
  }
}

module.exports = GatherCourage;
