"use strict";
const Constants = require ("../../../Constants");
const HellsThunderBase = require("../setDDN/HellsThunder");

class HellsThunder extends HellsThunderBase {
  constructor(game) {
    super(game, "Hell's Thunder", "Shards of Alara", "ALA");
  }
}

module.exports = HellsThunder;
