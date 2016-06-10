"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManorSkeleton extends UnimplementedCard {
  constructor (game) {
    super(game, "Manor Skeleton", "Innistrad", "ISD");
  }
}

module.exports = ManorSkeleton;
