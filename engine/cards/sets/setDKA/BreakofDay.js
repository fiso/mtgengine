"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BreakofDay extends Card {
  constructor(game) {
    super(game, "Break of Day", "Dark Ascension", "DKA");
  }
}

module.exports = BreakofDay;
