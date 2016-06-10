"use strict";
const Constants = require ("../../../Constants");
const SkyhunterSkirmisherBase = require("../setC14/SkyhunterSkirmisher");

class SkyhunterSkirmisher extends SkyhunterSkirmisherBase {
  constructor (game) {
    super(game, "Skyhunter Skirmisher", "Tenth Edition", "10E");
  }
}

module.exports = SkyhunterSkirmisher;
