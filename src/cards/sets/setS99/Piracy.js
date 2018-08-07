"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Piracy extends UnimplementedCard {
  constructor (game) {
    super(game, "Piracy", "Starter 1999", "S99");
  }
}

module.exports = Piracy;
