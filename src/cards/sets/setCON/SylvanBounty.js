"use strict";
const Constants = require ("../../../Constants");
const SylvanBountyBase = require("../setE01/SylvanBounty");

class SylvanBounty extends SylvanBountyBase {
  constructor (game) {
    super(game, "Sylvan Bounty", "Conflux", "CON");
  }
}

module.exports = SylvanBounty;
