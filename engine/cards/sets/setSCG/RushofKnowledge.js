"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RushofKnowledgeBase = require("../setC14/RushofKnowledge.js");

class RushofKnowledge extends RushofKnowledgeBase {
  constructor(game) {
    super(game, "Rush of Knowledge", "Scourge", "SCG");
  }
}

module.exports = RushofKnowledge;
