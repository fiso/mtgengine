"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalsePeace extends UnimplementedCard {
  constructor (game) {
    super(game, "False Peace", "Portal", "POR");
  }
}

module.exports = FalsePeace;
