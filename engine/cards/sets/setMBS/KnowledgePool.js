"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnowledgePool extends Card {
  constructor(game) {
    super(game, "Knowledge Pool", "Mirrodin Besieged", "MBS");
  }
}

module.exports = KnowledgePool;
