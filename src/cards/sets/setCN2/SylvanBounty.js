"use strict";
const Constants = require ("../../../Constants");
const SylvanBountyBase = require("../setE01/SylvanBounty");

class SylvanBounty extends SylvanBountyBase {
  constructor (game) {
    super(game, "Sylvan Bounty", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = SylvanBounty;
