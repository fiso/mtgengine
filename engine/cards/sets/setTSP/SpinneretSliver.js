"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpinneretSliver extends Card {
  constructor(game) {
    super(game, "Spinneret Sliver", "Time Spiral", "TSP");
  }
}

module.exports = SpinneretSliver;
