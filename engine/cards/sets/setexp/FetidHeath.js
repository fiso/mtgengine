"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FetidHeathBase = require("../setEVE/FetidHeath.js");

class FetidHeath extends FetidHeathBase {
  constructor(game) {
    super(game, "Fetid Heath", "Zendikar Expedition", "EXP");
  }
}

module.exports = FetidHeath;
