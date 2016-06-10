"use strict";
const Constants = require ("../../../Constants");
const ConeofFlameBase = require("../setDD3_JVC/ConeofFlame");

class ConeofFlame extends ConeofFlameBase {
  constructor (game) {
    super(game, "Cone of Flame", "Weatherlight", "WTH");
  }
}

module.exports = ConeofFlame;
