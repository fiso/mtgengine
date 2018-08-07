"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConjurersCloset extends UnimplementedCard {
  constructor (game) {
    super(game, "Conjurer's Closet", "Commander Anthology", "CMA");
  }
}

module.exports = ConjurersCloset;
