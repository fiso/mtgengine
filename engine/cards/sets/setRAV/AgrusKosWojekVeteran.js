"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AgrusKosWojekVeteran extends Card {
  constructor(game) {
    super(game, "Agrus Kos, Wojek Veteran", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = AgrusKosWojekVeteran;
