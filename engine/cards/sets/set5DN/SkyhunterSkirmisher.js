"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkyhunterSkirmisherBase = require("../setC14/SkyhunterSkirmisher.js");

class SkyhunterSkirmisher extends SkyhunterSkirmisherBase {
  constructor(game) {
    super(game, "Skyhunter Skirmisher", "Fifth Dawn", "5DN");
  }
}

module.exports = SkyhunterSkirmisher;
