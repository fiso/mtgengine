"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhostShip extends Card {
  constructor(game) {
    super(game, "Ghost Ship", "Fourth Edition", "4ED");
  }
}

module.exports = GhostShip;
