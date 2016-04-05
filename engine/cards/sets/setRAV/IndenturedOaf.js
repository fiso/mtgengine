"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IndenturedOaf extends UnimplementedCard {
  constructor(game) {
    super(game, "Indentured Oaf", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = IndenturedOaf;
