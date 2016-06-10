"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonRoost extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Roost", "Onslaught", "ONS");
  }
}

module.exports = DragonRoost;
