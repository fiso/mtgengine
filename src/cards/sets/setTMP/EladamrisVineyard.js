"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EladamrisVineyard extends UnimplementedCard {
  constructor(game) {
    super(game, "Eladamri's Vineyard", "Tempest", "TMP");
  }
}

module.exports = EladamrisVineyard;
