"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GateHound extends UnimplementedCard {
  constructor(game) {
    super(game, "Gate Hound", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GateHound;
