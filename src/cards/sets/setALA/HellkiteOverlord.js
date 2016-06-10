"use strict";
const Constants = require ("../../../Constants");
const HellkiteOverlordBase = require("../setDRB/HellkiteOverlord");

class HellkiteOverlord extends HellkiteOverlordBase {
  constructor (game) {
    super(game, "Hellkite Overlord", "Shards of Alara", "ALA");
  }
}

module.exports = HellkiteOverlord;
