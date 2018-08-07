"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StampedingHorncrest extends UnimplementedCard {
  constructor (game) {
    super(game, "Stampeding Horncrest", "Rivals of Ixalan", "RIX");
  }
}

module.exports = StampedingHorncrest;
