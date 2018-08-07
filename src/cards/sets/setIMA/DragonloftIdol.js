"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonloftIdol extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragonloft Idol", "Iconic Masters", "IMA");
  }
}

module.exports = DragonloftIdol;
