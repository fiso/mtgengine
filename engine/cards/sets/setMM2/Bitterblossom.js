"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BitterblossomBase = require("../setpJGP/Bitterblossom.js");

class Bitterblossom extends BitterblossomBase {
  constructor(game) {
    super(game, "Bitterblossom", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Bitterblossom;
