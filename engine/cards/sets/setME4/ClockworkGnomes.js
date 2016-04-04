"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ClockworkGnomesBase = require("../setHML/ClockworkGnomes.js");

class ClockworkGnomes extends ClockworkGnomesBase {
  constructor(game) {
    super(game, "Clockwork Gnomes", "Masters Edition IV", "ME4");
  }
}

module.exports = ClockworkGnomes;
