"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Swerve extends UnimplementedCard {
  constructor(game) {
    super(game, "Swerve", "Shards of Alara", "ALA");
  }
}

module.exports = Swerve;
