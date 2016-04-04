"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkyhunterProwlerBase = require("../set5DN/SkyhunterProwler.js");

class SkyhunterProwler extends SkyhunterProwlerBase {
  constructor(game) {
    super(game, "Skyhunter Prowler", "Ninth Edition", "9ED");
  }
}

module.exports = SkyhunterProwler;
