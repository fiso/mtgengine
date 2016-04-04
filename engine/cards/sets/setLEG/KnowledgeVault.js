"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnowledgeVault extends Card {
  constructor(game) {
    super(game, "Knowledge Vault", "Legends", "LEG");
  }
}

module.exports = KnowledgeVault;
