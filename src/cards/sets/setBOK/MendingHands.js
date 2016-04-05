"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MendingHands extends UnimplementedCard {
  constructor(game) {
    super(game, "Mending Hands", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = MendingHands;
