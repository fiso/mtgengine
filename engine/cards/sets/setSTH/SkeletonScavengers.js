"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkeletonScavengers extends Card {
  constructor(game) {
    super(game, "Skeleton Scavengers", "Stronghold", "STH");
  }
}

module.exports = SkeletonScavengers;
