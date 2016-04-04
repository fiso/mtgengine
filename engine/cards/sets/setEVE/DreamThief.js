"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreamThief extends Card {
  constructor(game) {
    super(game, "Dream Thief", "Eventide", "EVE");
  }
}

module.exports = DreamThief;
