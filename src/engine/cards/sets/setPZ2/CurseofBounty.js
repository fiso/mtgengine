"use strict";
const Constants = require ("../../../Constants");
const CurseofBountyBase = require("../setC17/CurseofBounty");

class CurseofBounty extends CurseofBountyBase {
  constructor (game) {
    super(game, "Curse of Bounty", "You Make the Cube", "PZ2");
  }
}

module.exports = CurseofBounty;
