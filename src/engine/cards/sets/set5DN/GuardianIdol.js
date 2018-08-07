"use strict";
const Constants = require ("../../../Constants");
const GuardianIdolBase = require("../setIMA/GuardianIdol");

class GuardianIdol extends GuardianIdolBase {
  constructor (game) {
    super(game, "Guardian Idol", "Fifth Dawn", "5DN");
  }
}

module.exports = GuardianIdol;
