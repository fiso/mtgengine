"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagnifyingGlass extends Card {
  constructor(game) {
    super(game, "Magnifying Glass", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MagnifyingGlass;
