"use strict";
const Constants = require ("../../../Constants");
const HellkiteOverlordBase = require("../setALA/HellkiteOverlord");

class HellkiteOverlord extends HellkiteOverlordBase {
  constructor (game) {
    super(game, "Hellkite Overlord", "From the Vault: Dragons", "DRB");
  }
}

module.exports = HellkiteOverlord;
