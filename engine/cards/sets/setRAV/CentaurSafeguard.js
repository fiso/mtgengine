"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CentaurSafeguard extends Card {
  constructor(game) {
    super(game, "Centaur Safeguard", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = CentaurSafeguard;
