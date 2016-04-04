"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NullstoneGargoyle extends Card {
  constructor(game) {
    super(game, "Nullstone Gargoyle", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = NullstoneGargoyle;
