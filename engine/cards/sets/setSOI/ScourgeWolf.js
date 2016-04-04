"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScourgeWolf extends Card {
  constructor(game) {
    super(game, "Scourge Wolf", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ScourgeWolf;
