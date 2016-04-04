"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SilverbackApeBase = require("../set8ED/SilverbackApe.js");

class SilverbackApe extends SilverbackApeBase {
  constructor(game) {
    super(game, "Silverback Ape", "Starter 1999", "S99");
  }
}

module.exports = SilverbackApe;
