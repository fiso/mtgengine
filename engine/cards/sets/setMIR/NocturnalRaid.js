"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NocturnalRaid extends UnimplementedCard {
  constructor(game) {
    super(game, "Nocturnal Raid", "Mirage", "MIR");
  }
}

module.exports = NocturnalRaid;
