"use strict";
const Constants = require ("../../../Constants");
const RagManBase = require("../set7ED/RagMan");

class RagMan extends RagManBase {
  constructor (game) {
    super(game, "Rag Man", "Classic Sixth Edition", "6ED");
  }
}

module.exports = RagMan;
