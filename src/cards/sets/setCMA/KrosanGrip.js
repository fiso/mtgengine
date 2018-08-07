"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrosanGrip extends UnimplementedCard {
  constructor (game) {
    super(game, "Krosan Grip", "Commander Anthology", "CMA");
  }
}

module.exports = KrosanGrip;
