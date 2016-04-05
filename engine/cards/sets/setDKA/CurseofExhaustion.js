"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CurseofExhaustion extends UnimplementedCard {
  constructor(game) {
    super(game, "Curse of Exhaustion", "Dark Ascension", "DKA");
  }
}

module.exports = CurseofExhaustion;
