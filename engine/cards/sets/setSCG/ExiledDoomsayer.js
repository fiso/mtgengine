"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExiledDoomsayer extends Card {
  constructor(game) {
    super(game, "Exiled Doomsayer", "Scourge", "SCG");
  }
}

module.exports = ExiledDoomsayer;
