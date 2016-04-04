"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ConeofFlameBase = require("../setDD3_JVC/ConeofFlame.js");

class ConeofFlame extends ConeofFlameBase {
  constructor(game) {
    super(game, "Cone of Flame", "Planechase", "HOP");
  }
}

module.exports = ConeofFlame;
