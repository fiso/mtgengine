"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerrasGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Serra's Guardian", "Core Set 2019", "M19");
  }
}

module.exports = SerrasGuardian;
