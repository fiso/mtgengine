"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LayWaste extends Card {
  constructor(game) {
    super(game, "Lay Waste", "Onslaught", "ONS");
  }
}

module.exports = LayWaste;
