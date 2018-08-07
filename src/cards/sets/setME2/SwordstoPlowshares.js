"use strict";
const Constants = require ("../../../Constants");
const SwordstoPlowsharesBase = require("../setBBD/SwordstoPlowshares");

class SwordstoPlowshares extends SwordstoPlowsharesBase {
  constructor (game) {
    super(game, "Swords to Plowshares", "Masters Edition II", "ME2");
  }
}

module.exports = SwordstoPlowshares;
