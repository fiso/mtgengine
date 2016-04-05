"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LastGasp extends UnimplementedCard {
  constructor(game) {
    super(game, "Last Gasp", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = LastGasp;
