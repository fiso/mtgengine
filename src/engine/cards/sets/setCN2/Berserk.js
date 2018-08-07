"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Berserk extends UnimplementedCard {
  constructor (game) {
    super(game, "Berserk", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = Berserk;
