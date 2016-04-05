"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkeletalGrimace extends UnimplementedCard {
  constructor(game) {
    super(game, "Skeletal Grimace", "Innistrad", "ISD");
  }
}

module.exports = SkeletalGrimace;
