"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StasisCocoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Stasis Cocoon", "Fifth Dawn", "5DN");
  }
}

module.exports = StasisCocoon;
