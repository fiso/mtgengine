"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BorderGuard extends Card {
  constructor(game) {
    super(game, "Border Guard", "Portal", "POR");
  }
}

module.exports = BorderGuard;
