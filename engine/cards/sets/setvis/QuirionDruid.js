"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuirionDruid extends Card {
  constructor(game) {
    super(game, "Quirion Druid", "Visions", "VIS");
  }
}

module.exports = QuirionDruid;
