"use strict";
const Constants = require ("../../../Constants");
const SylvanBountyBase = require("../setCON/SylvanBounty");

class SylvanBounty extends SylvanBountyBase {
  constructor(game) {
    super(game, "Sylvan Bounty", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = SylvanBounty;
