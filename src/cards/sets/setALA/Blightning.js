"use strict";
const Constants = require ("../../../Constants");
const BlightningBase = require("../setDDK/Blightning");

class Blightning extends BlightningBase {
  constructor (game) {
    super(game, "Blightning", "Shards of Alara", "ALA");
  }
}

module.exports = Blightning;
