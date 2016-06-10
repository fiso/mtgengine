"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OblivionStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Oblivion Strike", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = OblivionStrike;
