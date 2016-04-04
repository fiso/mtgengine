"use strict";
const Constants = require ("../../../Constants");
const RevokeExistenceBase = require("../setBNG/RevokeExistence");

class RevokeExistence extends RevokeExistenceBase {
  constructor(game) {
    super(game, "Revoke Existence", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = RevokeExistence;
