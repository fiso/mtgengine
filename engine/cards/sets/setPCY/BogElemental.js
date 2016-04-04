"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BogElemental extends Card {
  constructor(game) {
    super(game, "Bog Elemental", "Prophecy", "PCY");
  }
}

module.exports = BogElemental;
