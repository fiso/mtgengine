"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Darkblast extends UnimplementedCard {
  constructor(game) {
    super(game, "Darkblast", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Darkblast;
