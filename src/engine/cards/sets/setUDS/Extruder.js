"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Extruder extends UnimplementedCard {
  constructor (game) {
    super(game, "Extruder", "Urza's Destiny", "UDS");
  }
}

module.exports = Extruder;
