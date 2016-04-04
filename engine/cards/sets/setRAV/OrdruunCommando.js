"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrdruunCommando extends Card {
  constructor(game) {
    super(game, "Ordruun Commando", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = OrdruunCommando;
