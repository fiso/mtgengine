"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TouchofDeathBase = require("../set5ED/TouchofDeath.js");

class TouchofDeath extends TouchofDeathBase {
  constructor(game) {
    super(game, "Touch of Death", "Ice Age", "ICE");
  }
}

module.exports = TouchofDeath;
