"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrMindservant extends UnimplementedCard {
  constructor(game) {
    super(game, "Myr Mindservant", "Mirrodin", "MRD");
  }
}

module.exports = MyrMindservant;
