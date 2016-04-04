"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HandofDeathBase = require("../setPOR/HandofDeath.js");

class HandofDeath extends HandofDeathBase {
  constructor(game) {
    super(game, "Hand of Death", "Starter 2000", "S00");
  }
}

module.exports = HandofDeath;
