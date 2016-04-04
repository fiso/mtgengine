"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IdleThoughts extends Card {
  constructor(game) {
    super(game, "Idle Thoughts", "Eventide", "EVE");
  }
}

module.exports = IdleThoughts;
