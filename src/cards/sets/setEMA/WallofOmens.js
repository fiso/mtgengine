"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofOmens extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Omens", "Eternal Masters", "EMA");
  }
}

module.exports = WallofOmens;
