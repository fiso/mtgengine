"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathbringerLiege extends Card {
  constructor(game) {
    super(game, "Deathbringer Liege", "Eventide", "EVE");
  }
}

module.exports = DeathbringerLiege;
