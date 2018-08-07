"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagicWord extends UnimplementedCard {
  constructor (game) {
    super(game, "Magic Word", "Unstable", "UST");
  }
}

module.exports = MagicWord;
