"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sandblast extends Card {
  constructor(game) {
    super(game, "Sandblast", "Fate Reforged", "FRF");
  }
}

module.exports = Sandblast;
