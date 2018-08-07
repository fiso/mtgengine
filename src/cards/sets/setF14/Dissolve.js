"use strict";
const Constants = require ("../../../Constants");
const DissolveBase = require("../setIMA/Dissolve");

class Dissolve extends DissolveBase {
  constructor (game) {
    super(game, "Dissolve", "Friday Night Magic 2014", "F14");
  }
}

module.exports = Dissolve;
