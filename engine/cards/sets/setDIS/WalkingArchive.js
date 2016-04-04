"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WalkingArchive extends Card {
  constructor(game) {
    super(game, "Walking Archive", "Dissension", "DIS");
  }
}

module.exports = WalkingArchive;
