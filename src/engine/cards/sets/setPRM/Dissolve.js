"use strict";
const Constants = require ("../../../Constants");
const DissolveBase = require("../setIMA/Dissolve");

class Dissolve extends DissolveBase {
  constructor (game) {
    super(game, "Dissolve", "Magic Online Promos", "PRM");
  }
}

module.exports = Dissolve;
