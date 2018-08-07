"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MimingSlime extends UnimplementedCard {
  constructor (game) {
    super(game, "Miming Slime", "Gatecrash", "GTC");
  }
}

module.exports = MimingSlime;
