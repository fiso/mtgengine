"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConjurersBan extends UnimplementedCard {
  constructor (game) {
    super(game, "Conjurer's Ban", "Guildpact", "GPT");
  }
}

module.exports = ConjurersBan;
