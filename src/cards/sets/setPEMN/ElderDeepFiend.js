"use strict";
const Constants = require ("../../../Constants");
const ElderDeepFiendBase = require("../setEMN/ElderDeepFiend");

class ElderDeepFiend extends ElderDeepFiendBase {
  constructor (game) {
    super(game, "Elder Deep-Fiend", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = ElderDeepFiend;
