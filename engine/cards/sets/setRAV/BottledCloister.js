"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BottledCloister extends UnimplementedCard {
  constructor(game) {
    super(game, "Bottled Cloister", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BottledCloister;
