"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfernalDenizen extends UnimplementedCard {
  constructor (game) {
    super(game, "Infernal Denizen", "Ice Age", "ICE");
  }
}

module.exports = InfernalDenizen;
