"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KnowledgeVaultBase = require("../setLEG/KnowledgeVault.js");

class KnowledgeVault extends KnowledgeVaultBase {
  constructor(game) {
    super(game, "Knowledge Vault", "Masters Edition III", "ME3");
  }
}

module.exports = KnowledgeVault;
