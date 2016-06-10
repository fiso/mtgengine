"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrakeFamiliar extends UnimplementedCard {
  constructor (game) {
    super(game, "Drake Familiar", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DrakeFamiliar;
