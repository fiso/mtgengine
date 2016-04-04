"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sparkspitter extends Card {
  constructor(game) {
    super(game, "Sparkspitter", "Future Sight", "FUT");
  }
}

module.exports = Sparkspitter;
