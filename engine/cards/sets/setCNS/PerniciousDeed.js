"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PerniciousDeedBase = require("../setAPC/PerniciousDeed.js");

class PerniciousDeed extends PerniciousDeedBase {
  constructor(game) {
    super(game, "Pernicious Deed", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = PerniciousDeed;
