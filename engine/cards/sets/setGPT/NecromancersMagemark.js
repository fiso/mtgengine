"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NecromancersMagemark extends Card {
  constructor(game) {
    super(game, "Necromancer's Magemark", "Guildpact", "GPT");
  }
}

module.exports = NecromancersMagemark;
