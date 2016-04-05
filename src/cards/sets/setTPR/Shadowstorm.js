"use strict";
const Constants = require ("../../../Constants");
const ShadowstormBase = require("../setTMP/Shadowstorm");

class Shadowstorm extends ShadowstormBase {
  constructor(game) {
    super(game, "Shadowstorm", "Tempest Remastered", "TPR");
  }
}

module.exports = Shadowstorm;
