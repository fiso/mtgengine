"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeyDruid extends Card {
  constructor(game) {
    super(game, "Ley Druid", "Collector's Edition", "CED");
  }
}

module.exports = LeyDruid;
