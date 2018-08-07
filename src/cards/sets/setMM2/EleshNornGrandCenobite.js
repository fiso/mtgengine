"use strict";
const Constants = require ("../../../Constants");
const EleshNornGrandCenobiteBase = require("../setIMA/EleshNornGrandCenobite");

class EleshNornGrandCenobite extends EleshNornGrandCenobiteBase {
  constructor (game) {
    super(game, "Elesh Norn, Grand Cenobite", "Modern Masters 2015", "MM2");
  }
}

module.exports = EleshNornGrandCenobite;
