"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OracleofBones extends Card {
  constructor(game) {
    super(game, "Oracle of Bones", "Born of the Gods", "BNG");
  }
}

module.exports = OracleofBones;
