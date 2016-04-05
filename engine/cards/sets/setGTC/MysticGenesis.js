"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticGenesis extends UnimplementedCard {
  constructor(game) {
    super(game, "Mystic Genesis", "Gatecrash", "GTC");
  }
}

module.exports = MysticGenesis;
