"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrivilegedPosition extends UnimplementedCard {
  constructor (game) {
    super(game, "Privileged Position", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = PrivilegedPosition;
