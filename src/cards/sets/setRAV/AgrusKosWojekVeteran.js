"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AgrusKosWojekVeteran extends UnimplementedCard {
  constructor(game) {
    super(game, "Agrus Kos, Wojek Veteran", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = AgrusKosWojekVeteran;
