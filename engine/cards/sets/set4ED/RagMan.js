"use strict";
const Constants = require ("../../../Constants");
const RagManBase = require("../set6ED/RagMan");

class RagMan extends RagManBase {
  constructor(game) {
    super(game, "Rag Man", "Fourth Edition", "4ED");
  }
}

module.exports = RagMan;
