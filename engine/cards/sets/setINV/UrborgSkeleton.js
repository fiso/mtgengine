"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrborgSkeleton extends Card {
  constructor(game) {
    super(game, "Urborg Skeleton", "Invasion", "INV");
  }
}

module.exports = UrborgSkeleton;
