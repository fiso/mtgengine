"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonRoost extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Roost", "Tenth Edition", "10E");
  }
}

module.exports = DragonRoost;
