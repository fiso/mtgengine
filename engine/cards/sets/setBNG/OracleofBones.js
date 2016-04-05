"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OracleofBones extends UnimplementedCard {
  constructor(game) {
    super(game, "Oracle of Bones", "Born of the Gods", "BNG");
  }
}

module.exports = OracleofBones;
