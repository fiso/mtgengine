"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LimDlsPaladin extends Card {
  constructor(game) {
    super(game, "Lim-Dûl's Paladin", "Alliances", "ALL");
  }
}

module.exports = LimDlsPaladin;
