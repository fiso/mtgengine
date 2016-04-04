"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StromgaldCrusader extends Card {
  constructor(game) {
    super(game, "Stromgald Crusader", "Coldsnap", "CSP");
  }
}

module.exports = StromgaldCrusader;
