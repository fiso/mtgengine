"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArcumsWhistle extends Card {
  constructor(game) {
    super(game, "Arcum's Whistle", "Ice Age", "ICE");
  }
}

module.exports = ArcumsWhistle;
