"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RagManBase = require("../set6ED/RagMan.js");

class RagMan extends RagManBase {
  constructor(game) {
    super(game, "Rag Man", "Seventh Edition", "7ED");
  }
}

module.exports = RagMan;
