"use strict";
const Constants = require ("../../../Constants");
const ConeofFlameBase = require("../setDD3_JVC/ConeofFlame");

class ConeofFlame extends ConeofFlameBase {
  constructor (game) {
    super(game, "Cone of Flame", "Tenth Edition", "10E");
  }
}

module.exports = ConeofFlame;
