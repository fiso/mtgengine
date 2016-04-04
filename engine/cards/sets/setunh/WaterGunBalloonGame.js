"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WaterGunBalloonGame extends Card {
  constructor(game) {
    super(game, "Water Gun Balloon Game", "Unhinged", "UNH");
  }
}

module.exports = WaterGunBalloonGame;
