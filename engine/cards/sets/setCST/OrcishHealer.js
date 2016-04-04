"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishHealer extends UnimplementedCard {
  constructor(game) {
    super(game, "Orcish Healer", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = OrcishHealer;
