"use strict";
const Constants = require ("../../../Constants");
const SkyhunterSkirmisherBase = require("../setC14/SkyhunterSkirmisher");

class SkyhunterSkirmisher extends SkyhunterSkirmisherBase {
  constructor(game) {
    super(game, "Skyhunter Skirmisher", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = SkyhunterSkirmisher;
