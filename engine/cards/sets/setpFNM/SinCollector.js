"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SinCollectorBase = require("../setDGM/SinCollector.js");

class SinCollector extends SinCollectorBase {
  constructor(game) {
    super(game, "Sin Collector", "Friday Night Magic", "pFNM");
  }
}

module.exports = SinCollector;
