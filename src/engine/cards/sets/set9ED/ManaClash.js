"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaClash extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Clash", "Ninth Edition", "9ED");
  }
}

module.exports = ManaClash;
