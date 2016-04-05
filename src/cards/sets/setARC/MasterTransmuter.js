"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterTransmuter extends UnimplementedCard {
  constructor(game) {
    super(game, "Master Transmuter", "Archenemy", "ARC");
  }
}

module.exports = MasterTransmuter;
