"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FightwithFire extends UnimplementedCard {
  constructor (game) {
    super(game, "Fight with Fire", "Dominaria", "DOM");
  }
}

module.exports = FightwithFire;
