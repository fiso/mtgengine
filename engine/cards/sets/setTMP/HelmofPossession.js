"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HelmofPossession extends UnimplementedCard {
  constructor(game) {
    super(game, "Helm of Possession", "Tempest", "TMP");
  }
}

module.exports = HelmofPossession;
