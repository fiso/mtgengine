"use strict";
const Constants = require ("../../../Constants");
const EleshNornGrandCenobiteBase = require("../setIMA/EleshNornGrandCenobite");

class EleshNornGrandCenobite extends EleshNornGrandCenobiteBase {
  constructor (game) {
    super(game, "Elesh Norn, Grand Cenobite", "Magic Online Promos", "PRM");
  }
}

module.exports = EleshNornGrandCenobite;
