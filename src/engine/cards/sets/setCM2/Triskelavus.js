"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Triskelavus extends UnimplementedCard {
  constructor (game) {
    super(game, "Triskelavus", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = Triskelavus;
