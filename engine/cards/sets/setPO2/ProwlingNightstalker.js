"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ProwlingNightstalkerBase = require("../setME4/ProwlingNightstalker.js");

class ProwlingNightstalker extends ProwlingNightstalkerBase {
  constructor(game) {
    super(game, "Prowling Nightstalker", "Portal Second Age", "PO2");
  }
}

module.exports = ProwlingNightstalker;
