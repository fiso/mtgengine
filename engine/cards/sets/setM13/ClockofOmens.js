"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ClockofOmensBase = require("../set5DN/ClockofOmens.js");

class ClockofOmens extends ClockofOmensBase {
  constructor(game) {
    super(game, "Clock of Omens", "Magic 2013", "M13");
  }
}

module.exports = ClockofOmens;
