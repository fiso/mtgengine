"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LimDlsPaladin extends UnimplementedCard {
  constructor(game) {
    super(game, "Lim-Dûl's Paladin", "Alliances", "ALL");
  }
}

module.exports = LimDlsPaladin;
