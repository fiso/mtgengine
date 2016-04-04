"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BehindtheScenes extends Card {
  constructor(game) {
    super(game, "Behind the Scenes", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BehindtheScenes;
