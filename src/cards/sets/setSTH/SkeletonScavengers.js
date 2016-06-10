"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkeletonScavengers extends UnimplementedCard {
  constructor (game) {
    super(game, "Skeleton Scavengers", "Stronghold", "STH");
  }
}

module.exports = SkeletonScavengers;
