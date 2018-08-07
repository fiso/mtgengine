"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CausticTar extends UnimplementedCard {
  constructor (game) {
    super(game, "Caustic Tar", "Masters 25", "A25");
  }
}

module.exports = CausticTar;
