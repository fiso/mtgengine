"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClergyenVec extends Card {
  constructor(game) {
    super(game, "Clergy en-Vec", "Tempest", "TMP");
  }
}

module.exports = ClergyenVec;
