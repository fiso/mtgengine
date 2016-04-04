"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArchaeologicalDig extends UnimplementedCard {
  constructor(game) {
    super(game, "Archaeological Dig", "Invasion", "INV");
  }
}

module.exports = ArchaeologicalDig;
