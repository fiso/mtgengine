"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuietSpeculation extends UnimplementedCard {
  constructor (game) {
    super(game, "Quiet Speculation", "Eternal Masters", "EMA");
  }
}

module.exports = QuietSpeculation;
