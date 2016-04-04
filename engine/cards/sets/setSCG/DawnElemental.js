"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DawnElemental extends Card {
  constructor(game) {
    super(game, "Dawn Elemental", "Scourge", "SCG");
  }
}

module.exports = DawnElemental;
