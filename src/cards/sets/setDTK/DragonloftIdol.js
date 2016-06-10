"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonloftIdol extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragonloft Idol", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DragonloftIdol;
