"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticGate extends UnimplementedCard {
  constructor(game) {
    super(game, "Mystic Gate", "Shadowmoor", "SHM");
  }
}

module.exports = MysticGate;
