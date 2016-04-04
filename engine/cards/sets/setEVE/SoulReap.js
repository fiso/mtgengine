"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulReap extends Card {
  constructor(game) {
    super(game, "Soul Reap", "Eventide", "EVE");
  }
}

module.exports = SoulReap;
