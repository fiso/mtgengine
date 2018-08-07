"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClockworkBeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Clockwork Beast", "Masters Edition", "MED");
  }
}

module.exports = ClockworkBeast;
