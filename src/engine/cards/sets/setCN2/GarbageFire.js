"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GarbageFire extends UnimplementedCard {
  constructor (game) {
    super(game, "Garbage Fire", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = GarbageFire;
