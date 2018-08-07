"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LimDulsPaladin extends UnimplementedCard {
  constructor (game) {
    super(game, "Lim-Dûl's Paladin", "Alliances", "ALL");
  }
}

module.exports = LimDulsPaladin;
