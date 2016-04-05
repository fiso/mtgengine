"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZealousGuardian extends UnimplementedCard {
  constructor(game) {
    super(game, "Zealous Guardian", "Shadowmoor", "SHM");
  }
}

module.exports = ZealousGuardian;
