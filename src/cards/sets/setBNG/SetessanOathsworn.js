"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SetessanOathsworn extends UnimplementedCard {
  constructor(game) {
    super(game, "Setessan Oathsworn", "Born of the Gods", "BNG");
  }
}

module.exports = SetessanOathsworn;
