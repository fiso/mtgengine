"use strict";
const Constants = require ("../../../Constants");
const SwordstoPlowsharesBase = require("../setATH/SwordstoPlowshares");

class SwordstoPlowshares extends SwordstoPlowsharesBase {
  constructor(game) {
    super(game, "Swords to Plowshares", "Limited Edition Alpha", "LEA");
  }
}

module.exports = SwordstoPlowshares;
