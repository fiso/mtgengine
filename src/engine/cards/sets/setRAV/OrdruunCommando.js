"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrdruunCommando extends UnimplementedCard {
  constructor (game) {
    super(game, "Ordruun Commando", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = OrdruunCommando;
