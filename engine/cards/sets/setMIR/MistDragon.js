"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistDragon extends UnimplementedCard {
  constructor(game) {
    super(game, "Mist Dragon", "Mirage", "MIR");
  }
}

module.exports = MistDragon;
