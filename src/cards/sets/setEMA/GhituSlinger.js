"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhituSlinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghitu Slinger", "Eternal Masters", "EMA");
  }
}

module.exports = GhituSlinger;
