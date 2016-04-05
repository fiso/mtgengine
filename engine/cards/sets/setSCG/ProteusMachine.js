"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProteusMachine extends UnimplementedCard {
  constructor(game) {
    super(game, "Proteus Machine", "Scourge", "SCG");
  }
}

module.exports = ProteusMachine;
