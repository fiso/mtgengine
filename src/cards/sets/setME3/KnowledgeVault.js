"use strict";
const Constants = require ("../../../Constants");
const KnowledgeVaultBase = require("../setLEG/KnowledgeVault");

class KnowledgeVault extends KnowledgeVaultBase {
  constructor (game) {
    super(game, "Knowledge Vault", "Masters Edition III", "ME3");
  }
}

module.exports = KnowledgeVault;
