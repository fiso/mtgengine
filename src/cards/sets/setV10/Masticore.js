"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Masticore extends UnimplementedCard {
  constructor (game) {
    super(game, "Masticore", "From the Vault: Relics", "V10");
  }
}

module.exports = Masticore;
