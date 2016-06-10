"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TangleAsp extends UnimplementedCard {
  constructor (game) {
    super(game, "Tangle Asp", "Fifth Dawn", "5DN");
  }
}

module.exports = TangleAsp;
