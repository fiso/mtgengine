"use strict";
const Constants = require ("../../../Constants");
const HandofDeathBase = require("../setPOR/HandofDeath");

class HandofDeath extends HandofDeathBase {
  constructor(game) {
    super(game, "Hand of Death", "Starter 1999", "S99");
  }
}

module.exports = HandofDeath;
