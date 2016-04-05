"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoneDancer extends UnimplementedCard {
  constructor(game) {
    super(game, "Bone Dancer", "Weatherlight", "WTH");
  }
}

module.exports = BoneDancer;
