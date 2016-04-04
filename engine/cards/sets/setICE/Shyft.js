"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Shyft extends Card {
  constructor(game) {
    super(game, "Shyft", "Ice Age", "ICE");
  }
}

module.exports = Shyft;
