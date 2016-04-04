"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CorruptCourtOfficial extends Card {
  constructor(game) {
    super(game, "Corrupt Court Official", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = CorruptCourtOfficial;
