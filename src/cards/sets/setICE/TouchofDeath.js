"use strict";
const Constants = require ("../../../Constants");
const TouchofDeathBase = require("../set5ED/TouchofDeath");

class TouchofDeath extends TouchofDeathBase {
  constructor (game) {
    super(game, "Touch of Death", "Ice Age", "ICE");
  }
}

module.exports = TouchofDeath;
