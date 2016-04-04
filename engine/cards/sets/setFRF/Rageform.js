"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rageform extends Card {
  constructor(game) {
    super(game, "Rageform", "Fate Reforged", "FRF");
  }
}

module.exports = Rageform;
