"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MysticRetrievalBase = require("../setC15/MysticRetrieval.js");

class MysticRetrieval extends MysticRetrievalBase {
  constructor(game) {
    super(game, "Mystic Retrieval", "Dark Ascension", "DKA");
  }
}

module.exports = MysticRetrieval;
