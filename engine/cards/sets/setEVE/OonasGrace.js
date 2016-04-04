"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OonasGrace extends Card {
  constructor(game) {
    super(game, "Oona's Grace", "Eventide", "EVE");
  }
}

module.exports = OonasGrace;
