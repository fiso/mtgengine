"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningSerpent extends UnimplementedCard {
  constructor(game) {
    super(game, "Lightning Serpent", "Coldsnap", "CSP");
  }
}

module.exports = LightningSerpent;
