"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reroute extends UnimplementedCard {
  constructor (game) {
    super(game, "Reroute", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Reroute;
