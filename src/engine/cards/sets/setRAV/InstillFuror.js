"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InstillFuror extends UnimplementedCard {
  constructor (game) {
    super(game, "Instill Furor", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = InstillFuror;
