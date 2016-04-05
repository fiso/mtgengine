"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CraftyPathmage extends UnimplementedCard {
  constructor(game) {
    super(game, "Crafty Pathmage", "Ninth Edition", "9ED");
  }
}

module.exports = CraftyPathmage;
