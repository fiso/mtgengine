"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Snapback extends Card {
  constructor(game) {
    super(game, "Snapback", "Time Spiral", "TSP");
  }
}

module.exports = Snapback;
