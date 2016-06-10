"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TorpidMoloch extends UnimplementedCard {
  constructor (game) {
    super(game, "Torpid Moloch", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = TorpidMoloch;
