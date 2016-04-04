"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RighteousAuraBase = require("../setMMQ/RighteousAura.js");

class RighteousAura extends RighteousAuraBase {
  constructor(game) {
    super(game, "Righteous Aura", "Visions", "VIS");
  }
}

module.exports = RighteousAura;
