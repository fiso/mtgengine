"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CloakedSiren extends UnimplementedCard {
  constructor (game) {
    super(game, "Cloaked Siren", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = CloakedSiren;
