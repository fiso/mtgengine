"use strict";
const Constants = require ("../../../Constants");
const BrasssBountyBase = require("../setPRIX/BrasssBounty");

class BrasssBounty extends BrasssBountyBase {
  constructor (game) {
    super(game, "Brass's Bounty", "Rivals of Ixalan", "RIX");
  }
}

module.exports = BrasssBounty;
