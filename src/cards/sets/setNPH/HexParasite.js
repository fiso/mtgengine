"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HexParasite extends UnimplementedCard {
  constructor (game) {
    super(game, "Hex Parasite", "New Phyrexia", "NPH");
  }
}

module.exports = HexParasite;
