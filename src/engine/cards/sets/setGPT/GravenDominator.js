"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GravenDominator extends UnimplementedCard {
  constructor (game) {
    super(game, "Graven Dominator", "Guildpact", "GPT");
  }
}

module.exports = GravenDominator;
