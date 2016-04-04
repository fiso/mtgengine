"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IgnitionTeam extends UnimplementedCard {
  constructor(game) {
    super(game, "Ignition Team", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = IgnitionTeam;
