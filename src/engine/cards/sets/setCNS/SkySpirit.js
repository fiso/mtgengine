"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkySpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Sky Spirit", "Conspiracy", "CNS");
  }
}

module.exports = SkySpirit;
