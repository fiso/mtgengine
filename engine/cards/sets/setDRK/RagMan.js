"use strict";
const Constants = require ("../../../Constants");
const RagManBase = require("../set6ED/RagMan");

class RagMan extends RagManBase {
  constructor(game) {
    super(game, "Rag Man", "The Dark", "DRK");
  }
}

module.exports = RagMan;
