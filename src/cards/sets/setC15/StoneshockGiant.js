"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneshockGiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Stoneshock Giant", "Commander 2015", "C15");
  }
}

module.exports = StoneshockGiant;
