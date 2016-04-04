"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkyhunterSkirmisherBase = require("../setC14/SkyhunterSkirmisher.js");

class SkyhunterSkirmisher extends SkyhunterSkirmisherBase {
  constructor(game) {
    super(game, "Skyhunter Skirmisher", "Tenth Edition", "10E");
  }
}

module.exports = SkyhunterSkirmisher;
