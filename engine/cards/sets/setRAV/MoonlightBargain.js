"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoonlightBargain extends Card {
  constructor(game) {
    super(game, "Moonlight Bargain", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = MoonlightBargain;
