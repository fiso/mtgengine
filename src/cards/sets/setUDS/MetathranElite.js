"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MetathranElite extends UnimplementedCard {
  constructor(game) {
    super(game, "Metathran Elite", "Urza's Destiny", "UDS");
  }
}

module.exports = MetathranElite;
