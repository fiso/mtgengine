"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThirstforKnowledgeBase = require("../setDDF/ThirstforKnowledge.js");

class ThirstforKnowledge extends ThirstforKnowledgeBase {
  constructor(game) {
    super(game, "Thirst for Knowledge", "Mirrodin", "MRD");
  }
}

module.exports = ThirstforKnowledge;
