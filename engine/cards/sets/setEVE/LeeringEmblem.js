"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeeringEmblem extends Card {
  constructor(game) {
    super(game, "Leering Emblem", "Eventide", "EVE");
  }
}

module.exports = LeeringEmblem;
