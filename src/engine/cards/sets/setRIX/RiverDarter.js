"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiverDarter extends UnimplementedCard {
  constructor (game) {
    super(game, "River Darter", "Rivals of Ixalan", "RIX");
  }
}

module.exports = RiverDarter;
