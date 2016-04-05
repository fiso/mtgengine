"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AyliEternalPilgrim extends UnimplementedCard {
  constructor(game) {
    super(game, "Ayli, Eternal Pilgrim", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = AyliEternalPilgrim;
