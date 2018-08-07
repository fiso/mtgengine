"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NothingCanStopMeNow extends UnimplementedCard {
  constructor (game) {
    super(game, "Nothing Can Stop Me Now", "Archenemy", "ARC");
  }
}

module.exports = NothingCanStopMeNow;
