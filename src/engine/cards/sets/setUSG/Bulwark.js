"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bulwark extends UnimplementedCard {
  constructor (game) {
    super(game, "Bulwark", "Urza's Saga", "USG");
  }
}

module.exports = Bulwark;
