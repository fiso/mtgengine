"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NivixBarrier extends UnimplementedCard {
  constructor(game) {
    super(game, "Nivix Barrier", "Magic Origins", "ORI");
  }
}

module.exports = NivixBarrier;
