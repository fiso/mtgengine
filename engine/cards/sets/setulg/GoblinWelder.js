"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinWelderBase = require("../setC14/GoblinWelder.js");

class GoblinWelder extends GoblinWelderBase {
  constructor(game) {
    super(game, "Goblin Welder", "Urza's Legacy", "ULG");
  }
}

module.exports = GoblinWelder;
