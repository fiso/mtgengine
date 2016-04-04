"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Trailblazer extends Card {
  constructor(game) {
    super(game, "Trailblazer", "Ice Age", "ICE");
  }
}

module.exports = Trailblazer;
