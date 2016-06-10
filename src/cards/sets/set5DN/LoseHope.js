"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoseHope extends UnimplementedCard {
  constructor (game) {
    super(game, "Lose Hope", "Fifth Dawn", "5DN");
  }
}

module.exports = LoseHope;
