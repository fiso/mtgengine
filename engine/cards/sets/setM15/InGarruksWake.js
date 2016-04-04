"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InGarruksWakeBase = require("../setpLPA/InGarruksWake.js");

class InGarruksWake extends InGarruksWakeBase {
  constructor(game) {
    super(game, "In Garruk's Wake", "Magic 2015 Core Set", "M15");
  }
}

module.exports = InGarruksWake;
