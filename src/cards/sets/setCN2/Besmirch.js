"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Besmirch extends UnimplementedCard {
  constructor (game) {
    super(game, "Besmirch", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = Besmirch;
