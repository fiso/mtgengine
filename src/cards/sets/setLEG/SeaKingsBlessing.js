"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeaKingsBlessing extends UnimplementedCard {
  constructor (game) {
    super(game, "Sea Kings' Blessing", "Legends", "LEG");
  }
}

module.exports = SeaKingsBlessing;
