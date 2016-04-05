"use strict";
const Constants = require ("../../../Constants");
const ArrestBase = require("../setpMEI/Arrest");

class Arrest extends ArrestBase {
  constructor(game) {
    super(game, "Arrest", "Return to Ravnica", "RTR");
  }
}

module.exports = Arrest;
