"use strict";
const Constants = require ("../../../Constants");
const BrasssBountyBase = require("../setPRIX/BrasssBounty");

class BrasssBounty extends BrasssBountyBase {
  constructor (game) {
    super(game, "Brass's Bounty", "Magic Online Promos", "PRM");
  }
}

module.exports = BrasssBounty;
