"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnowledgePool extends UnimplementedCard {
  constructor (game) {
    super(game, "Knowledge Pool", "Mirrodin Besieged", "MBS");
  }
}

module.exports = KnowledgePool;
