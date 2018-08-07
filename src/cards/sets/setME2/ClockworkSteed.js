"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClockworkSteed extends UnimplementedCard {
  constructor (game) {
    super(game, "Clockwork Steed", "Masters Edition II", "ME2");
  }
}

module.exports = ClockworkSteed;
