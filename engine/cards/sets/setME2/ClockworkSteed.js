"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ClockworkSteedBase = require("../set5ED/ClockworkSteed.js");

class ClockworkSteed extends ClockworkSteedBase {
  constructor(game) {
    super(game, "Clockwork Steed", "Masters Edition II", "ME2");
  }
}

module.exports = ClockworkSteed;
