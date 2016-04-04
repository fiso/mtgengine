"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MourningThrull extends Card {
  constructor(game) {
    super(game, "Mourning Thrull", "Guildpact", "GPT");
  }
}

module.exports = MourningThrull;
