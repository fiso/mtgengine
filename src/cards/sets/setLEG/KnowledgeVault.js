"use strict";
const Constants = require ("../../../Constants");
const KnowledgeVaultBase = require("../setME3/KnowledgeVault");

class KnowledgeVault extends KnowledgeVaultBase {
  constructor (game) {
    super(game, "Knowledge Vault", "Legends", "LEG");
  }
}

module.exports = KnowledgeVault;
