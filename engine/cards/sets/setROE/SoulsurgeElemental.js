"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulsurgeElemental extends Card {
  constructor(game) {
    super(game, "Soulsurge Elemental", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SoulsurgeElemental;
