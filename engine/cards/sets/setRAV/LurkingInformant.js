"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LurkingInformant extends Card {
  constructor(game) {
    super(game, "Lurking Informant", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = LurkingInformant;
