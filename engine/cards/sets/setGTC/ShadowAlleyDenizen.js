"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShadowAlleyDenizenBase = require("../setDDM/ShadowAlleyDenizen.js");

class ShadowAlleyDenizen extends ShadowAlleyDenizenBase {
  constructor(game) {
    super(game, "Shadow Alley Denizen", "Gatecrash", "GTC");
  }
}

module.exports = ShadowAlleyDenizen;
