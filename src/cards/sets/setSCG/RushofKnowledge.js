"use strict";
const Constants = require ("../../../Constants");
const RushofKnowledgeBase = require("../setC14/RushofKnowledge");

class RushofKnowledge extends RushofKnowledgeBase {
  constructor (game) {
    super(game, "Rush of Knowledge", "Scourge", "SCG");
  }
}

module.exports = RushofKnowledge;
