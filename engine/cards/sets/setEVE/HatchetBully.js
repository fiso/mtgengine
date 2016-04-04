"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HatchetBully extends Card {
  constructor(game) {
    super(game, "Hatchet Bully", "Eventide", "EVE");
  }
}

module.exports = HatchetBully;
