"use strict";
const Constants = require ("../../../Constants");
const RighteousAuraBase = require("../setMMQ/RighteousAura");

class RighteousAura extends RighteousAuraBase {
  constructor (game) {
    super(game, "Righteous Aura", "Visions", "VIS");
  }
}

module.exports = RighteousAura;
