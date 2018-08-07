"use strict";
const Constants = require ("../../../Constants");
const StinkdrinkerDaredevilBase = require("../setCM2/StinkdrinkerDaredevil");

class StinkdrinkerDaredevil extends StinkdrinkerDaredevilBase {
  constructor (game) {
    super(game, "Stinkdrinker Daredevil", "Modern Masters", "MMA");
  }
}

module.exports = StinkdrinkerDaredevil;
