"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WindsofChangeBase = require("../set5ED/WindsofChange.js");

class WindsofChange extends WindsofChangeBase {
  constructor(game) {
    super(game, "Winds of Change", "Masters Edition", "MED");
  }
}

module.exports = WindsofChange;
