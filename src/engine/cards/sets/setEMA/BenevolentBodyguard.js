"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenevolentBodyguard extends UnimplementedCard {
  constructor (game) {
    super(game, "Benevolent Bodyguard", "Eternal Masters", "EMA");
  }
}

module.exports = BenevolentBodyguard;
