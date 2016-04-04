"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StinkdrinkerDaredevilBase = require("../setC15/StinkdrinkerDaredevil.js");

class StinkdrinkerDaredevil extends StinkdrinkerDaredevilBase {
  constructor(game) {
    super(game, "Stinkdrinker Daredevil", "Lorwyn", "LRW");
  }
}

module.exports = StinkdrinkerDaredevil;
