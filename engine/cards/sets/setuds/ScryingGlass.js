"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScryingGlass extends Card {
  constructor(game) {
    super(game, "Scrying Glass", "Urza's Destiny", "UDS");
  }
}

module.exports = ScryingGlass;
