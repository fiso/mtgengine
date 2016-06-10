"use strict";
const Constants = require ("../../../Constants");
const SkyhunterProwlerBase = require("../set5DN/SkyhunterProwler");

class SkyhunterProwler extends SkyhunterProwlerBase {
  constructor (game) {
    super(game, "Skyhunter Prowler", "Tenth Edition", "10E");
  }
}

module.exports = SkyhunterProwler;
