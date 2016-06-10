"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HornetCobra extends UnimplementedCard {
  constructor (game) {
    super(game, "Hornet Cobra", "Legends", "LEG");
  }
}

module.exports = HornetCobra;
