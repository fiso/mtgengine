"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmillarySphere extends UnimplementedCard {
  constructor(game) {
    super(game, "Armillary Sphere", "Commander 2013 Edition", "C13");
  }
}

module.exports = ArmillarySphere;
