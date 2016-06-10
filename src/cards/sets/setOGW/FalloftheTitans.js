"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalloftheTitans extends UnimplementedCard {
  constructor (game) {
    super(game, "Fall of the Titans", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = FalloftheTitans;
