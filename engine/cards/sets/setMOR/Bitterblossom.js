"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BitterblossomBase = require("../setpJGP/Bitterblossom.js");

class Bitterblossom extends BitterblossomBase {
  constructor(game) {
    super(game, "Bitterblossom", "Morningtide", "MOR");
  }
}

module.exports = Bitterblossom;
