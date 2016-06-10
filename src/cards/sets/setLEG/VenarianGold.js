"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VenarianGold extends UnimplementedCard {
  constructor (game) {
    super(game, "Venarian Gold", "Legends", "LEG");
  }
}

module.exports = VenarianGold;
