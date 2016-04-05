"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClergyenVec extends UnimplementedCard {
  constructor(game) {
    super(game, "Clergy en-Vec", "Tempest", "TMP");
  }
}

module.exports = ClergyenVec;
