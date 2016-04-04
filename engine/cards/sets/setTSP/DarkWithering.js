"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarkWithering extends Card {
  constructor(game) {
    super(game, "Dark Withering", "Time Spiral", "TSP");
  }
}

module.exports = DarkWithering;
