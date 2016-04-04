"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Snowblind extends Card {
  constructor(game) {
    super(game, "Snowblind", "Ice Age", "ICE");
  }
}

module.exports = Snowblind;
