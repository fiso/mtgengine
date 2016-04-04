"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChilltotheBone extends Card {
  constructor(game) {
    super(game, "Chill to the Bone", "Coldsnap", "CSP");
  }
}

module.exports = ChilltotheBone;
