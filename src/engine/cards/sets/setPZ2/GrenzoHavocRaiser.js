"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrenzoHavocRaiser extends UnimplementedCard {
  constructor (game) {
    super(game, "Grenzo, Havoc Raiser", "You Make the Cube", "PZ2");
  }
}

module.exports = GrenzoHavocRaiser;
