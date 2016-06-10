"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrapEssence extends UnimplementedCard {
  constructor (game) {
    super(game, "Trap Essence", "Khans of Tarkir", "KTK");
  }
}

module.exports = TrapEssence;
