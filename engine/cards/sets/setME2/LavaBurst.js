"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LavaBurstBase = require("../setDKM/LavaBurst.js");

class LavaBurst extends LavaBurstBase {
  constructor(game) {
    super(game, "Lava Burst", "Masters Edition II", "ME2");
  }
}

module.exports = LavaBurst;
