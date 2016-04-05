"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Endoskeleton extends UnimplementedCard {
  constructor(game) {
    super(game, "Endoskeleton", "Urza's Saga", "USG");
  }
}

module.exports = Endoskeleton;
