"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonlordsServant extends Card {
  constructor(game) {
    super(game, "Dragonlord's Servant", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DragonlordsServant;
