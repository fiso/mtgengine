"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArrestBase = require("../setpMEI/Arrest.js");

class Arrest extends ArrestBase {
  constructor(game) {
    super(game, "Arrest", "Return to Ravnica", "RTR");
  }
}

module.exports = Arrest;
