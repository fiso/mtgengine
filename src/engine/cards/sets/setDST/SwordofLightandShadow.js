"use strict";
const Constants = require ("../../../Constants");
const SwordofLightandShadowBase = require("../setMPS/SwordofLightandShadow");

class SwordofLightandShadow extends SwordofLightandShadowBase {
  constructor (game) {
    super(game, "Sword of Light and Shadow", "Darksteel", "DST");
  }
}

module.exports = SwordofLightandShadow;
