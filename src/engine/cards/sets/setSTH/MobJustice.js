"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MobJustice extends UnimplementedCard {
  constructor (game) {
    super(game, "Mob Justice", "Stronghold", "STH");
  }
}

module.exports = MobJustice;
