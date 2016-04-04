"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OutpostSiege extends Card {
  constructor(game) {
    super(game, "Outpost Siege", "Fate Reforged", "FRF");
  }
}

module.exports = OutpostSiege;
