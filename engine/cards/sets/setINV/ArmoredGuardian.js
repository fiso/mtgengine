"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmoredGuardian extends UnimplementedCard {
  constructor(game) {
    super(game, "Armored Guardian", "Invasion", "INV");
  }
}

module.exports = ArmoredGuardian;
