"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RecklessSpiteBase = require("../setC13/RecklessSpite.js");

class RecklessSpite extends RecklessSpiteBase {
  constructor(game) {
    super(game, "Reckless Spite", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = RecklessSpite;
