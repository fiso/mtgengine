"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CurseofEchoes extends UnimplementedCard {
  constructor(game) {
    super(game, "Curse of Echoes", "Dark Ascension", "DKA");
  }
}

module.exports = CurseofEchoes;
