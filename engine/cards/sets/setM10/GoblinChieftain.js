"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinChieftain extends Card {
  constructor(game) {
    super(game, "Goblin Chieftain", "Magic 2010", "M10");
  }
}

module.exports = GoblinChieftain;
