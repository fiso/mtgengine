"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GudulLurker extends Card {
  constructor(game) {
    super(game, "Gudul Lurker", "Dragons of Tarkir", "DTK");
  }
}

module.exports = GudulLurker;
