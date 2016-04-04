"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GutterGrime extends Card {
  constructor(game) {
    super(game, "Gutter Grime", "Innistrad", "ISD");
  }
}

module.exports = GutterGrime;
