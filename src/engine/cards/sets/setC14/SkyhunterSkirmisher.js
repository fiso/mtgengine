"use strict";
const Constants = require ("../../../Constants");
const SkyhunterSkirmisherBase = require("../setMM2/SkyhunterSkirmisher");

class SkyhunterSkirmisher extends SkyhunterSkirmisherBase {
  constructor (game) {
    super(game, "Skyhunter Skirmisher", "Commander 2014", "C14");
  }
}

module.exports = SkyhunterSkirmisher;
