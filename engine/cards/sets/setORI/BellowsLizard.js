"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BellowsLizard extends Card {
  constructor(game) {
    super(game, "Bellows Lizard", "Magic Origins", "ORI");
  }
}

module.exports = BellowsLizard;
