"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CryofContrition extends UnimplementedCard {
  constructor (game) {
    super(game, "Cry of Contrition", "Guildpact", "GPT");
  }
}

module.exports = CryofContrition;
