"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CryptRipper extends UnimplementedCard {
  constructor(game) {
    super(game, "Crypt Ripper", "Zendikar", "ZEN");
  }
}

module.exports = CryptRipper;
