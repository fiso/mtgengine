"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SigardaHeronsGrace extends Card {
  constructor(game) {
    super(game, "Sigarda, Heron's Grace", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SigardaHeronsGrace;
