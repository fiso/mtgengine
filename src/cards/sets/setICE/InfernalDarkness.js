"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfernalDarkness extends UnimplementedCard {
  constructor (game) {
    super(game, "Infernal Darkness", "Ice Age", "ICE");
  }
}

module.exports = InfernalDarkness;
