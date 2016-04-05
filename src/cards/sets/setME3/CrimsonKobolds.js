"use strict";
const Constants = require ("../../../Constants");
const CrimsonKoboldsBase = require("../setLEG/CrimsonKobolds");

class CrimsonKobolds extends CrimsonKoboldsBase {
  constructor(game) {
    super(game, "Crimson Kobolds", "Masters Edition III", "ME3");
  }
}

module.exports = CrimsonKobolds;
