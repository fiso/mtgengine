"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KorScythemaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Kor Scythemaster", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = KorScythemaster;
