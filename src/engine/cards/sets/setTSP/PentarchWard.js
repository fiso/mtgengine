"use strict";
const Constants = require ("../../../Constants");
const PentarchWardBase = require("../setIMA/PentarchWard");

class PentarchWard extends PentarchWardBase {
  constructor (game) {
    super(game, "Pentarch Ward", "Time Spiral", "TSP");
  }
}

module.exports = PentarchWard;
