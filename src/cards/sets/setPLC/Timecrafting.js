"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Timecrafting extends UnimplementedCard {
  constructor (game) {
    super(game, "Timecrafting", "Planar Chaos", "PLC");
  }
}

module.exports = Timecrafting;
