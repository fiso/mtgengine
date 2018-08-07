"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tornado extends UnimplementedCard {
  constructor (game) {
    super(game, "Tornado", "Masters Edition", "MED");
  }
}

module.exports = Tornado;
