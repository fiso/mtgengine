"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PolisCrusher extends Card {
  constructor(game) {
    super(game, "Polis Crusher", "Theros", "THS");
  }
}

module.exports = PolisCrusher;
