"use strict";
const Constants = require ("../../../Constants");
const MadcapSkillsBase = require("../setMM3/MadcapSkills");

class MadcapSkills extends MadcapSkillsBase {
  constructor (game) {
    super(game, "Madcap Skills", "Gatecrash", "GTC");
  }
}

module.exports = MadcapSkills;
