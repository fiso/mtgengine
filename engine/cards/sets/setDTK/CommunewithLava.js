"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CommunewithLava extends Card {
  constructor(game) {
    super(game, "Commune with Lava", "Dragons of Tarkir", "DTK");
  }
}

module.exports = CommunewithLava;
