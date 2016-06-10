"use strict";
const Constants = require ("../../../Constants");
const ShadowAlleyDenizenBase = require("../setDDM/ShadowAlleyDenizen");

class ShadowAlleyDenizen extends ShadowAlleyDenizenBase {
  constructor (game) {
    super(game, "Shadow Alley Denizen", "Gatecrash", "GTC");
  }
}

module.exports = ShadowAlleyDenizen;
