"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AccumulatedKnowledgeBase = require("../setDDO/AccumulatedKnowledge.js");

class AccumulatedKnowledge extends AccumulatedKnowledgeBase {
  constructor(game) {
    super(game, "Accumulated Knowledge", "Nemesis", "NMS");
  }
}

module.exports = AccumulatedKnowledge;
