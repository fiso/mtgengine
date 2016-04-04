"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Drought extends Card {
  constructor(game) {
    super(game, "Drought", "Ice Age", "ICE");
  }
}

module.exports = Drought;
