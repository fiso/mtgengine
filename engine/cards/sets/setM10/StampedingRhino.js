"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StampedingRhino extends Card {
  constructor(game) {
    super(game, "Stampeding Rhino", "Magic 2010", "M10");
  }
}

module.exports = StampedingRhino;
