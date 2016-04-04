"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NightmareIncursion extends Card {
  constructor(game) {
    super(game, "Nightmare Incursion", "Eventide", "EVE");
  }
}

module.exports = NightmareIncursion;
