"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FireCovenant extends Card {
  constructor(game) {
    super(game, "Fire Covenant", "Ice Age", "ICE");
  }
}

module.exports = FireCovenant;
