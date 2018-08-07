"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Kookus extends UnimplementedCard {
  constructor (game) {
    super(game, "Kookus", "Visions", "VIS");
  }
}

module.exports = Kookus;
