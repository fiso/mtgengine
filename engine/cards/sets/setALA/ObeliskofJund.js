"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ObeliskofJundBase = require("../setC13/ObeliskofJund.js");

class ObeliskofJund extends ObeliskofJundBase {
  constructor(game) {
    super(game, "Obelisk of Jund", "Shards of Alara", "ALA");
  }
}

module.exports = ObeliskofJund;
