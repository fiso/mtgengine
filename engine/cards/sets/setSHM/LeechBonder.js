"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeechBonder extends Card {
  constructor(game) {
    super(game, "Leech Bonder", "Shadowmoor", "SHM");
  }
}

module.exports = LeechBonder;
