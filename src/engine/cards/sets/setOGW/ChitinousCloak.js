"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChitinousCloak extends UnimplementedCard {
  constructor (game) {
    super(game, "Chitinous Cloak", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ChitinousCloak;
