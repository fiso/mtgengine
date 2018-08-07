"use strict";
const Constants = require ("../../../Constants");
const SkyhunterProwlerBase = require("../set10E/SkyhunterProwler");

class SkyhunterProwler extends SkyhunterProwlerBase {
  constructor (game) {
    super(game, "Skyhunter Prowler", "Fifth Dawn", "5DN");
  }
}

module.exports = SkyhunterProwler;
