"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LimDlsHighGuard extends Card {
  constructor(game) {
    super(game, "Lim-Dûl's High Guard", "Alliances", "ALL");
  }
}

module.exports = LimDlsHighGuard;
