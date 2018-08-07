"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CelestialKirin extends UnimplementedCard {
  constructor (game) {
    super(game, "Celestial Kirin", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = CelestialKirin;
