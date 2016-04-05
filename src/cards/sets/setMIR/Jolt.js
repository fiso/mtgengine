"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Jolt extends UnimplementedCard {
  constructor(game) {
    super(game, "Jolt", "Mirage", "MIR");
  }
}

module.exports = Jolt;
