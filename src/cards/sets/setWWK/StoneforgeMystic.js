"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneforgeMystic extends UnimplementedCard {
  constructor (game) {
    super(game, "Stoneforge Mystic", "Worldwake", "WWK");
  }
}

module.exports = StoneforgeMystic;
