"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UndeadWarchief extends Card {
  constructor(game) {
    super(game, "Undead Warchief", "Planechase", "HOP");
  }
}

module.exports = UndeadWarchief;
