"use strict";
const Constants = require ("../../../Constants");
const SkyhunterProwlerBase = require("../set5DN/SkyhunterProwler");

class SkyhunterProwler extends SkyhunterProwlerBase {
  constructor(game) {
    super(game, "Skyhunter Prowler", "Ninth Edition", "9ED");
  }
}

module.exports = SkyhunterProwler;
