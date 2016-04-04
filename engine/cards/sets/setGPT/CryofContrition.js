"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CryofContrition extends Card {
  constructor(game) {
    super(game, "Cry of Contrition", "Guildpact", "GPT");
  }
}

module.exports = CryofContrition;
