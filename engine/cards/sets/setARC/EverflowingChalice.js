"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EverflowingChalice extends Card {
  constructor(game) {
    super(game, "Everflowing Chalice", "Archenemy", "ARC");
  }
}

module.exports = EverflowingChalice;
