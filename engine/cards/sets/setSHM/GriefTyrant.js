"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GriefTyrant extends Card {
  constructor(game) {
    super(game, "Grief Tyrant", "Shadowmoor", "SHM");
  }
}

module.exports = GriefTyrant;
