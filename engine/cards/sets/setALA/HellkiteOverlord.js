"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HellkiteOverlordBase = require("../setDRB/HellkiteOverlord.js");

class HellkiteOverlord extends HellkiteOverlordBase {
  constructor(game) {
    super(game, "Hellkite Overlord", "Shards of Alara", "ALA");
  }
}

module.exports = HellkiteOverlord;
