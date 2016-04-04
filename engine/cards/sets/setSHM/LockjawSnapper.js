"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LockjawSnapper extends Card {
  constructor(game) {
    super(game, "Lockjaw Snapper", "Shadowmoor", "SHM");
  }
}

module.exports = LockjawSnapper;
