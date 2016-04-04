"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrafMole extends Card {
  constructor(game) {
    super(game, "Graf Mole", "Shadows over Innistrad", "SOI");
  }
}

module.exports = GrafMole;
