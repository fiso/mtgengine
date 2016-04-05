"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Brainspoil extends UnimplementedCard {
  constructor(game) {
    super(game, "Brainspoil", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Brainspoil;
