"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Excruciator extends UnimplementedCard {
  constructor(game) {
    super(game, "Excruciator", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Excruciator;
