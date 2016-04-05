"use strict";
const Constants = require ("../../../Constants");
const MysticRetrievalBase = require("../setC15/MysticRetrieval");

class MysticRetrieval extends MysticRetrievalBase {
  constructor(game) {
    super(game, "Mystic Retrieval", "Dark Ascension", "DKA");
  }
}

module.exports = MysticRetrieval;
