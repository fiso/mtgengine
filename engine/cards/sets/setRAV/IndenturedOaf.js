"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IndenturedOaf extends Card {
  constructor(game) {
    super(game, "Indentured Oaf", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = IndenturedOaf;
