"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SwordofLightandShadowBase = require("../setDST/SwordofLightandShadow.js");

class SwordofLightandShadow extends SwordofLightandShadowBase {
  constructor(game) {
    super(game, "Sword of Light and Shadow", "Judge Gift Program", "pJGP");
  }
}

module.exports = SwordofLightandShadow;
