"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SilverMyrBase = require("../setDDF/SilverMyr.js");

class SilverMyr extends SilverMyrBase {
  constructor(game) {
    super(game, "Silver Myr", "Mirrodin", "MRD");
  }
}

module.exports = SilverMyr;
