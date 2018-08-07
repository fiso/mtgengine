"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrespassersCurse extends UnimplementedCard {
  constructor (game) {
    super(game, "Trespasser's Curse", "Amonkhet", "AKH");
  }
}

module.exports = TrespassersCurse;
