"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CloakedSiren extends UnimplementedCard {
  constructor (game) {
    super(game, "Cloaked Siren", "Journey into Nyx", "JOU");
  }
}

module.exports = CloakedSiren;
