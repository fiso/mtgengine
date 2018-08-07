"use strict";
const Constants = require ("../../../Constants");
const EngulftheShoreBase = require("../setDDT/EngulftheShore");

class EngulftheShore extends EngulftheShoreBase {
  constructor (game) {
    super(game, "Engulf the Shore", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = EngulftheShore;
