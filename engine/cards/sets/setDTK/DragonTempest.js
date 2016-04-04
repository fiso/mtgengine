"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonTempest extends UnimplementedCard {
  constructor(game) {
    super(game, "Dragon Tempest", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DragonTempest;
