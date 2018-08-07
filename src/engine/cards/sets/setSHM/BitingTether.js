"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BitingTether extends UnimplementedCard {
  constructor (game) {
    super(game, "Biting Tether", "Shadowmoor", "SHM");
  }
}

module.exports = BitingTether;
