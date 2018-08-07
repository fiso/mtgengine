"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulswornJury extends UnimplementedCard {
  constructor (game) {
    super(game, "Soulsworn Jury", "Dissension", "DIS");
  }
}

module.exports = SoulswornJury;
