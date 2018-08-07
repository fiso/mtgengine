"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaFlair extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Flair", "Unhinged", "UNH");
  }
}

module.exports = ManaFlair;
