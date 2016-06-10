"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalusPaladin extends UnimplementedCard {
  constructor (game) {
    super(game, "Talus Paladin", "Worldwake", "WWK");
  }
}

module.exports = TalusPaladin;
