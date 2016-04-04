"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ClockworkBeastBase = require("../setBTD/ClockworkBeast.js");

class ClockworkBeast extends ClockworkBeastBase {
  constructor(game) {
    super(game, "Clockwork Beast", "International Collector's Edition", "CEI");
  }
}

module.exports = ClockworkBeast;
