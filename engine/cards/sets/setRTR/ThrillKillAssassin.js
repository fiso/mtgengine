"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrillKillAssassin extends UnimplementedCard {
  constructor(game) {
    super(game, "Thrill-Kill Assassin", "Return to Ravnica", "RTR");
  }
}

module.exports = ThrillKillAssassin;
