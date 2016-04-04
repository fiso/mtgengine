"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrainingWhelk extends Card {
  constructor(game) {
    super(game, "Draining Whelk", "Time Spiral", "TSP");
  }
}

module.exports = DrainingWhelk;
