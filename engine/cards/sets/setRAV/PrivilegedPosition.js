"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrivilegedPosition extends Card {
  constructor(game) {
    super(game, "Privileged Position", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = PrivilegedPosition;
