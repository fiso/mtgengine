"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrDrago extends UnimplementedCard {
  constructor (game) {
    super(game, "Ur-Drago", "Legends", "LEG");
  }
}

module.exports = UrDrago;
