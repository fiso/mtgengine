"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnowledgeVault extends UnimplementedCard {
  constructor (game) {
    super(game, "Knowledge Vault", "Legends", "LEG");
  }
}

module.exports = KnowledgeVault;
