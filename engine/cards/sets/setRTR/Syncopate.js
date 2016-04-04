"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SyncopateBase = require("../setODY/Syncopate.js");

class Syncopate extends SyncopateBase {
  constructor(game) {
    super(game, "Syncopate", "Return to Ravnica", "RTR");
  }
}

module.exports = Syncopate;
