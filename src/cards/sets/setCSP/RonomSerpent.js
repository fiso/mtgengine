"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RonomSerpent extends UnimplementedCard {
  constructor (game) {
    super(game, "Ronom Serpent", "Coldsnap", "CSP");
  }
}

module.exports = RonomSerpent;
