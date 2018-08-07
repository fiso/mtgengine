"use strict";
const Constants = require ("../../../Constants");
const ShadowstormBase = require("../setTPR/Shadowstorm");

class Shadowstorm extends ShadowstormBase {
  constructor (game) {
    super(game, "Shadowstorm", "Tempest", "TMP");
  }
}

module.exports = Shadowstorm;
