"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraveShellScarab extends UnimplementedCard {
  constructor(game) {
    super(game, "Grave-Shell Scarab", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GraveShellScarab;
