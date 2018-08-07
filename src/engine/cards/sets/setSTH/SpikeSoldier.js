"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpikeSoldier extends UnimplementedCard {
  constructor (game) {
    super(game, "Spike Soldier", "Stronghold", "STH");
  }
}

module.exports = SpikeSoldier;
