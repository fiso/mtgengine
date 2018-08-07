"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LimDulsHighGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Lim-Dûl's High Guard", "Masters Edition II", "ME2");
  }
}

module.exports = LimDulsHighGuard;
