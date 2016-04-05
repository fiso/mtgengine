"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OracleenVec extends UnimplementedCard {
  constructor(game) {
    super(game, "Oracle en-Vec", "Tempest", "TMP");
  }
}

module.exports = OracleenVec;
