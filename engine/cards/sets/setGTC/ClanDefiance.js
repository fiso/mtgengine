"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClanDefiance extends UnimplementedCard {
  constructor(game) {
    super(game, "Clan Defiance", "Gatecrash", "GTC");
  }
}

module.exports = ClanDefiance;
