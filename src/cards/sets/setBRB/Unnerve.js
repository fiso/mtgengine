"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Unnerve extends UnimplementedCard {
  constructor (game) {
    super(game, "Unnerve", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Unnerve;
