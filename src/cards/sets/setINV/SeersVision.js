"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeersVision extends UnimplementedCard {
  constructor(game) {
    super(game, "Seer's Vision", "Invasion", "INV");
  }
}

module.exports = SeersVision;
