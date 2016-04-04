"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ghoulsteed extends Card {
  constructor(game) {
    super(game, "Ghoulsteed", "Shadows over Innistrad", "SOI");
  }
}

module.exports = Ghoulsteed;
