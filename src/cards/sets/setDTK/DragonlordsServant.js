"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonlordsServant extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragonlord's Servant", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DragonlordsServant;
