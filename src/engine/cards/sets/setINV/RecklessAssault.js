"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessAssault extends UnimplementedCard {
  constructor (game) {
    super(game, "Reckless Assault", "Invasion", "INV");
  }
}

module.exports = RecklessAssault;
