"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ToothCollectorBase = require("../setDDQ/ToothCollector.js");

class ToothCollector extends ToothCollectorBase {
  constructor(game) {
    super(game, "Tooth Collector", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ToothCollector;
