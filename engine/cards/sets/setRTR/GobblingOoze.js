"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GobblingOoze extends UnimplementedCard {
  constructor(game) {
    super(game, "Gobbling Ooze", "Return to Ravnica", "RTR");
  }
}

module.exports = GobblingOoze;
