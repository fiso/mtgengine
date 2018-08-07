"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcaneLaboratory extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcane Laboratory", "Seventh Edition", "7ED");
  }
}

module.exports = ArcaneLaboratory;
