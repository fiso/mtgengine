"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MendingHands extends UnimplementedCard {
  constructor (game) {
    super(game, "Mending Hands", "Ninth Edition", "9ED");
  }
}

module.exports = MendingHands;
