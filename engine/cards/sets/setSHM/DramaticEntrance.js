"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DramaticEntrance extends Card {
  constructor(game) {
    super(game, "Dramatic Entrance", "Shadowmoor", "SHM");
  }
}

module.exports = DramaticEntrance;
