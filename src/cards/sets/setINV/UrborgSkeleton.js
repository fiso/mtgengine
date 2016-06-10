"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrborgSkeleton extends UnimplementedCard {
  constructor (game) {
    super(game, "Urborg Skeleton", "Invasion", "INV");
  }
}

module.exports = UrborgSkeleton;
