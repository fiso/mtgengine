"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnowledgeVault extends UnimplementedCard {
  constructor (game) {
    super(game, "Knowledge Vault", "Masters Edition III", "ME3");
  }
}

module.exports = KnowledgeVault;
