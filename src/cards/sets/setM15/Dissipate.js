"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dissipate extends UnimplementedCard {
  constructor (game) {
    super(game, "Dissipate", "Magic 2015", "M15");
  }
}

module.exports = Dissipate;
