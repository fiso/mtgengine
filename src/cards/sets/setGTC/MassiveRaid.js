"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MassiveRaid extends UnimplementedCard {
  constructor(game) {
    super(game, "Massive Raid", "Gatecrash", "GTC");
  }
}

module.exports = MassiveRaid;
