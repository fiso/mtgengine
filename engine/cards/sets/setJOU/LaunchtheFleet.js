"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LaunchtheFleet extends UnimplementedCard {
  constructor(game) {
    super(game, "Launch the Fleet", "Journey into Nyx", "JOU");
  }
}

module.exports = LaunchtheFleet;
