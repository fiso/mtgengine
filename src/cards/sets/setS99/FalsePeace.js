"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalsePeace extends UnimplementedCard {
  constructor (game) {
    super(game, "False Peace", "Starter 1999", "S99");
  }
}

module.exports = FalsePeace;
