"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bombard extends UnimplementedCard {
  constructor (game) {
    super(game, "Bombard", "Rivals of Ixalan", "RIX");
  }
}

module.exports = Bombard;
