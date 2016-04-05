"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpireOwl extends UnimplementedCard {
  constructor(game) {
    super(game, "Spire Owl", "Urza's Saga", "USG");
  }
}

module.exports = SpireOwl;
