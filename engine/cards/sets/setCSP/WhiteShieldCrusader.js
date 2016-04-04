"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WhiteShieldCrusader extends Card {
  constructor(game) {
    super(game, "White Shield Crusader", "Coldsnap", "CSP");
  }
}

module.exports = WhiteShieldCrusader;
