"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CraftyPathmage extends UnimplementedCard {
  constructor (game) {
    super(game, "Crafty Pathmage", "Tenth Edition", "10E");
  }
}

module.exports = CraftyPathmage;
