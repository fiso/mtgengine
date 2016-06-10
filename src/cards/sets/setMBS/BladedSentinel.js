"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BladedSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Bladed Sentinel", "Mirrodin Besieged", "MBS");
  }
}

module.exports = BladedSentinel;
