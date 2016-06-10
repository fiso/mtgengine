"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NullmageShepherd extends UnimplementedCard {
  constructor (game) {
    super(game, "Nullmage Shepherd", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = NullmageShepherd;
