"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InstillFuror extends Card {
  constructor(game) {
    super(game, "Instill Furor", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = InstillFuror;
