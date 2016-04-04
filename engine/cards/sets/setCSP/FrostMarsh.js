"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrostMarsh extends Card {
  constructor(game) {
    super(game, "Frost Marsh", "Coldsnap", "CSP");
  }
}

module.exports = FrostMarsh;
