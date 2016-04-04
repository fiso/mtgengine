"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LimDlsHighGuard extends UnimplementedCard {
  constructor(game) {
    super(game, "Lim-Dûl's High Guard", "Alliances", "ALL");
  }
}

module.exports = LimDlsHighGuard;
