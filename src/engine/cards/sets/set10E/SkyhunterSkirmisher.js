"use strict";
const Constants = require ("../../../Constants");
const SkyhunterSkirmisherBase = require("../setMM2/SkyhunterSkirmisher");

class SkyhunterSkirmisher extends SkyhunterSkirmisherBase {
  constructor (game) {
    super(game, "Skyhunter Skirmisher", "Tenth Edition", "10E");
  }
}

module.exports = SkyhunterSkirmisher;
