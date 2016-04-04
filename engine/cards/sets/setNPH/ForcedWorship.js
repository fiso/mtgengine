"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForcedWorship extends Card {
  constructor(game) {
    super(game, "Forced Worship", "New Phyrexia", "NPH");
  }
}

module.exports = ForcedWorship;
