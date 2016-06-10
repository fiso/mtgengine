"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VileBile extends UnimplementedCard {
  constructor (game) {
    super(game, "Vile Bile", "Unhinged", "UNH");
  }
}

module.exports = VileBile;
