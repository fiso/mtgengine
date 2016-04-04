"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RunedArch extends Card {
  constructor(game) {
    super(game, "Runed Arch", "Ice Age", "ICE");
  }
}

module.exports = RunedArch;
