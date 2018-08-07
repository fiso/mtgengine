"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Balance extends UnimplementedCard {
  constructor (game) {
    super(game, "Balance", "Eternal Masters", "EMA");
  }
}

module.exports = Balance;
