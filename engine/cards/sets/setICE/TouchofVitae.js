"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TouchofVitae extends Card {
  constructor(game) {
    super(game, "Touch of Vitae", "Ice Age", "ICE");
  }
}

module.exports = TouchofVitae;
