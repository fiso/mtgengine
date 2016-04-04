"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cloudform extends Card {
  constructor(game) {
    super(game, "Cloudform", "Fate Reforged", "FRF");
  }
}

module.exports = Cloudform;
