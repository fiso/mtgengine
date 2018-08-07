"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LockjawSnapper extends UnimplementedCard {
  constructor (game) {
    super(game, "Lockjaw Snapper", "Shadowmoor", "SHM");
  }
}

module.exports = LockjawSnapper;
