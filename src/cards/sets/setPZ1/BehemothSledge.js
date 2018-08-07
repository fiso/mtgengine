"use strict";
const Constants = require ("../../../Constants");
const BehemothSledgeBase = require("../setC17/BehemothSledge");

class BehemothSledge extends BehemothSledgeBase {
  constructor (game) {
    super(game, "Behemoth Sledge", "Legendary Cube", "PZ1");
  }
}

module.exports = BehemothSledge;
