"use strict";
const Constants = require ("../../../Constants");
const HandofDeathBase = require("../setPOR/HandofDeath");

class HandofDeath extends HandofDeathBase {
  constructor(game) {
    super(game, "Hand of Death", "Portal Second Age", "PO2");
  }
}

module.exports = HandofDeath;
