"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WalkingAtlas extends Card {
  constructor(game) {
    super(game, "Walking Atlas", "Worldwake", "WWK");
  }
}

module.exports = WalkingAtlas;
