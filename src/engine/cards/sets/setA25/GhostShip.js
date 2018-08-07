"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostShip extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghost Ship", "Masters 25", "A25");
  }
}

module.exports = GhostShip;
