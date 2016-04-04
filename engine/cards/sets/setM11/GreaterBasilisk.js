"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreaterBasilisk extends Card {
  constructor(game) {
    super(game, "Greater Basilisk", "Magic 2011", "M11");
  }
}

module.exports = GreaterBasilisk;
