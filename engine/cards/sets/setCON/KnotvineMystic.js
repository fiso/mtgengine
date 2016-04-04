"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnotvineMystic extends Card {
  constructor(game) {
    super(game, "Knotvine Mystic", "Conflux", "CON");
  }
}

module.exports = KnotvineMystic;
