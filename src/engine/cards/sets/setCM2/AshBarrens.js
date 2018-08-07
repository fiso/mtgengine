"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AshBarrens extends UnimplementedCard {
  constructor (game) {
    super(game, "Ash Barrens", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = AshBarrens;
