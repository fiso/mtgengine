"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GarzasAssassin extends Card {
  constructor(game) {
    super(game, "Garza's Assassin", "Coldsnap", "CSP");
  }
}

module.exports = GarzasAssassin;
