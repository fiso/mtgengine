"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClockofOmens extends UnimplementedCard {
  constructor (game) {
    super(game, "Clock of Omens", "Fifth Dawn", "5DN");
  }
}

module.exports = ClockofOmens;
