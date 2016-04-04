"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LagacLizard extends Card {
  constructor(game) {
    super(game, "Lagac Lizard", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LagacLizard;
