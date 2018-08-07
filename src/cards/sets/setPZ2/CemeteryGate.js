"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CemeteryGate extends UnimplementedCard {
  constructor (game) {
    super(game, "Cemetery Gate", "You Make the Cube", "PZ2");
  }
}

module.exports = CemeteryGate;
