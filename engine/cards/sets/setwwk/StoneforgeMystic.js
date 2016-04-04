"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StoneforgeMystic extends Card {
  constructor(game) {
    super(game, "Stoneforge Mystic", "Worldwake", "WWK");
  }
}

module.exports = StoneforgeMystic;
