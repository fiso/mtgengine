"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SanitariumSkeleton extends UnimplementedCard {
  constructor (game) {
    super(game, "Sanitarium Skeleton", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SanitariumSkeleton;
