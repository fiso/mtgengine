"use strict";
const Constants = require ("../../../Constants");
const SkyhunterSkirmisherBase = require("../setC14/SkyhunterSkirmisher");

class SkyhunterSkirmisher extends SkyhunterSkirmisherBase {
  constructor(game) {
    super(game, "Skyhunter Skirmisher", "Fifth Dawn", "5DN");
  }
}

module.exports = SkyhunterSkirmisher;
