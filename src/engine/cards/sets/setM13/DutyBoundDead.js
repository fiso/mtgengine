"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DutyBoundDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Duty-Bound Dead", "Magic 2013", "M13");
  }
}

module.exports = DutyBoundDead;
