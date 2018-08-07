"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PalianoVanguard extends UnimplementedCard {
  constructor (game) {
    super(game, "Paliano Vanguard", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = PalianoVanguard;
