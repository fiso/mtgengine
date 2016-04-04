"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Lightform extends Card {
  constructor(game) {
    super(game, "Lightform", "Fate Reforged", "FRF");
  }
}

module.exports = Lightform;
