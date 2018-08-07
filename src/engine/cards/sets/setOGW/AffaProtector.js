"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AffaProtector extends UnimplementedCard {
  constructor (game) {
    super(game, "Affa Protector", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = AffaProtector;
