"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TormodsCrypt extends UnimplementedCard {
  constructor(game) {
    super(game, "Tormod's Crypt", "Chronicles", "CHR");
  }
}

module.exports = TormodsCrypt;
