"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrimsonKoboldsBase = require("../setLEG/CrimsonKobolds.js");

class CrimsonKobolds extends CrimsonKoboldsBase {
  constructor(game) {
    super(game, "Crimson Kobolds", "Masters Edition III", "ME3");
  }
}

module.exports = CrimsonKobolds;
