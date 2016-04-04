"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThranDynamo extends Card {
  constructor(game) {
    super(game, "Thran Dynamo", "Archenemy", "ARC");
  }
}

module.exports = ThranDynamo;
