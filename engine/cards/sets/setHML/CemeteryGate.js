"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CemeteryGate extends UnimplementedCard {
  constructor(game) {
    super(game, "Cemetery Gate", "Homelands", "HML");
  }
}

module.exports = CemeteryGate;
