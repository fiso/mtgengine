"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkyhunterProwlerBase = require("../set5DN/SkyhunterProwler.js");

class SkyhunterProwler extends SkyhunterProwlerBase {
  constructor(game) {
    super(game, "Skyhunter Prowler", "Tenth Edition", "10E");
  }
}

module.exports = SkyhunterProwler;
