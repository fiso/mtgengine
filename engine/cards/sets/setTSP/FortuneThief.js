"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FortuneThief extends Card {
  constructor(game) {
    super(game, "Fortune Thief", "Time Spiral", "TSP");
  }
}

module.exports = FortuneThief;
