"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KorSkyClimber extends Card {
  constructor(game) {
    super(game, "Kor Sky Climber", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = KorSkyClimber;
