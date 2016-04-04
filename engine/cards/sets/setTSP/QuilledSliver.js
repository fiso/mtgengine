"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuilledSliver extends Card {
  constructor(game) {
    super(game, "Quilled Sliver", "Time Spiral", "TSP");
  }
}

module.exports = QuilledSliver;
