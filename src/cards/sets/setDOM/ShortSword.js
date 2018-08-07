"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShortSword extends UnimplementedCard {
  constructor (game) {
    super(game, "Short Sword", "Dominaria", "DOM");
  }
}

module.exports = ShortSword;
