"use strict";
const Constants = require ("../../../Constants");
const CrimsonKoboldsBase = require("../setME3/CrimsonKobolds");

class CrimsonKobolds extends CrimsonKoboldsBase {
  constructor (game) {
    super(game, "Crimson Kobolds", "Legends", "LEG");
  }
}

module.exports = CrimsonKobolds;
