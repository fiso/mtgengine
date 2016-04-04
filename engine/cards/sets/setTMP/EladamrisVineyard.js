"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EladamrisVineyard extends Card {
  constructor(game) {
    super(game, "Eladamri's Vineyard", "Tempest", "TMP");
  }
}

module.exports = EladamrisVineyard;
