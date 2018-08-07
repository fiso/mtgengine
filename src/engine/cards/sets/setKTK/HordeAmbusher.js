"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HordeAmbusher extends UnimplementedCard {
  constructor (game) {
    super(game, "Horde Ambusher", "Khans of Tarkir", "KTK");
  }
}

module.exports = HordeAmbusher;
