"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Blizzard extends Card {
  constructor(game) {
    super(game, "Blizzard", "Ice Age", "ICE");
  }
}

module.exports = Blizzard;
