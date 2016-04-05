"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireAnts extends UnimplementedCard {
  constructor(game) {
    super(game, "Fire Ants", "Battle Royale Box Set", "BRB");
  }
}

module.exports = FireAnts;
