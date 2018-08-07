"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SorcerersWand extends UnimplementedCard {
  constructor (game) {
    super(game, "Sorcerer's Wand", "Dominaria", "DOM");
  }
}

module.exports = SorcerersWand;
