"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarkDepths extends Card {
  constructor(game) {
    super(game, "Dark Depths", "Coldsnap", "CSP");
  }
}

module.exports = DarkDepths;
