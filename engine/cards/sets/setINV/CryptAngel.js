"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CryptAngel extends UnimplementedCard {
  constructor(game) {
    super(game, "Crypt Angel", "Invasion", "INV");
  }
}

module.exports = CryptAngel;
