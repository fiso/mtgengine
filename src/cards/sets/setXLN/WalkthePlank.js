"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WalkthePlank extends UnimplementedCard {
  constructor (game) {
    super(game, "Walk the Plank", "Ixalan", "XLN");
  }
}

module.exports = WalkthePlank;
