"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClockworkBeast extends UnimplementedCard {
  constructor(game) {
    super(game, "Clockwork Beast", "Beatdown Box Set", "BTD");
  }
}

module.exports = ClockworkBeast;
