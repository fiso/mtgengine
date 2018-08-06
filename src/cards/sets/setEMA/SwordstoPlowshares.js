"use strict";
const Constants = require ("../../../Constants");
const SwordstoPlowsharesBase = require("../setATH/SwordstoPlowshares");

class SwordstoPlowshares extends SwordstoPlowsharesBase {
  constructor (game) {
    super(game, "Swords to Plowshares", "Eternal Masters", "EMA");
  }
}

module.exports = SwordstoPlowshares;
