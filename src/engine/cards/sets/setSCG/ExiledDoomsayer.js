"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExiledDoomsayer extends UnimplementedCard {
  constructor (game) {
    super(game, "Exiled Doomsayer", "Scourge", "SCG");
  }
}

module.exports = ExiledDoomsayer;
