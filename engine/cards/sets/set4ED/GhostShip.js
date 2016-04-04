"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostShip extends UnimplementedCard {
  constructor(game) {
    super(game, "Ghost Ship", "Fourth Edition", "4ED");
  }
}

module.exports = GhostShip;
